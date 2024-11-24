from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import requests
import os
from config import MISTRAL_API_KEY, OPENAI_API_KEY

app = Flask(__name__)
CORS(app)

MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions"
OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    message = data['message']
    bot = data['bot']
    
    try:
        if bot == 'mistral':
            response = chat_with_mistral(message)
            print(response)
        else:
            response = chat_with_openai(message)
    except requests.exceptions.RequestException as e:
        print(f"Error de API: {str(e)}")
        if isinstance(e, requests.exceptions.HTTPError) and e.response.status_code == 401:
            response = "Error de autenticación. Por favor, verifica tu clave API."
        else:
            response = "Lo siento, ha ocurrido un error al comunicarse con la API. Por favor, intenta de nuevo."
    except Exception as e:
        print(f"Error inesperado: {str(e)}")
        response = "Ha ocurrido un error inesperado. Por favor, intenta de nuevo."
    
    return jsonify({'response': response})

def format_response(content):
    # Dividir el contenido en líneas
    lines = content.split('\n')
    formatted_content = ""
    in_code_block = False

    for line in lines:
        if line.strip().startswith('```'):
            if in_code_block:
                formatted_content += '</code></pre>\n'
                in_code_block = False
            else:
                formatted_content += '<pre><code>'
                in_code_block = True
        else:
            # Agregar un salto de línea HTML
            formatted_content += line + '<br>'  # Agrega <br> para saltos de línea

    if in_code_block:
        formatted_content += '</code></pre>\n'  # Cerrar cualquier bloque de código abierto

    return formatted_content

def chat_with_mistral(message):
    headers = {
        "Authorization": f"Bearer {MISTRAL_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "mistral-tiny",
        "messages": [{"role": "user", "content": message}]
    }
    response = requests.post(MISTRAL_API_URL, json=data, headers=headers)
    response.raise_for_status()
    content = response.json()['choices'][0]['message']['content']
    return format_response(content)  # Formatear la respuesta antes de devolverla

def chat_with_openai(message):
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": message}]
    }
    response = requests.post(OPENAI_API_URL, json=data, headers=headers)
    response.raise_for_status()
    content = response.json()['choices'][0]['message']['content']
    return format_response(content)  # Formatear la respuesta antes de devolverla

if __name__ == '__main__':
    app.run(debug=True)
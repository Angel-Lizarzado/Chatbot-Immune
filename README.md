# Chatbot Web con Flask y API de IA

Este proyecto consiste en un chatbot web desarrollado utilizando Flask como backend y una API de inteligencia artificial (IA) para generar respuestas. El chatbot puede interactuar con dos APIs diferentes: Mistral y OpenAI. 

## Estructura del Proyecto

La estructura recomendada para el proyecto es la siguiente:



```bash
Chatbot-Immune/
│
├── app.py                # Archivo principal de la aplicación
├── config.py             # Archivo de configuración con claves API
├── .env                  # Archivo .env con las claves de api
├── requirements.txt      # Dependencias del proyecto
├── templates/            # Carpeta para archivos HTML
│   └── index.html        # Archivo HTML principal
└── static/               # Carpeta para archivos estáticos (CSS, JS)
    ├── css/
    │   └── styles.css     # Estilos CSS
    └── js/
        └── script.js      # Lógica del chatbot
```


## Prompts y Respuestas de la IA

### 1. Configuración del entorno de desarrollo

**Prompt:** 
> ¿Cómo puedo configurar un entorno de desarrollo adecuado para un chatbot web usando Flask y una API de IA?

**Respuesta esperada:**
Para configurar un entorno de desarrollo para un chatbot web con Flask, sigue estos pasos:
1. Instala Python y pip si no lo tienes ya.
2. Crea un entorno virtual:
   ```bash
   python -m venv venv
3. Activa el entorno virtual:
    ```bash
   python -m venv venv
   En Windows: venv\Scripts\activate
   En MacOs o Linux: source venv/bin/activate

4. Instala las dependencias necesarias:
    ```bash
   pip install Flask flask-cors requests python-dotenv

# 2. Creación de la interfaz web

##Prompt:


    Proporcióname un código HTML y CSS básico para la interfaz de un chatbot.

- Respuesta esperada: 
     ```bash
     Aquí tienes un ejemplo de código HTML para la interfaz del chatbot:
     <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Chatbot Web</title>
            <link rel="stylesheet" href="css/styles.css">
        </head>
        <body>
            <header>
                <h1>Chatbot Web</h1>
            </header>
            <main>
                <div id="chat-container"></div>
                <div id="input-container">
                    <input type="text" id="user-input" placeholder="Escribe tu mensaje aquí...">
                    <button id="send-btn">Enviar</button>
                </div>
            </main>
            <script src="js/script.js"></script>
        </body>
        </html>


# 2. Configuración del Backend con Flask
## Prompt:

##Prompt:


    ¿Cómo puedo configurar un servidor backend usando Flask para recibir mensajes del frontend?.

- Respuesta esperada: 
     ```bash
     
    Para configurar el servidor backend en Flask, crea un archivo app.py con el siguiente contenido:

     from flask import Flask, request, jsonify

    app = Flask(__name__)

    @app.route('/chat', methods=['POST'])
    def chat():
        data = request.json
        message = data['message']
        # Aquí iría la lógica para interactuar con la API de IA
        return jsonify({'response': 'Respuesta del chatbot'})

    if __name__ == '__main__':
        app.run(debug=True)


# 4. Integración de la API de IA

## Prompt:

    ¿Cómo puedo autenticar y usar la API de OpenAI en mi aplicación Flask?

- Respuesta esperada: 
    ```bash
    Para autenticarte con la API de OpenAI, necesitas incluir tu clave API en el encabezado de las solicitudes. Aquí tienes un ejemplo de cómo hacerlo:
    import requests

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
        return response.json()['choices'][0]['message']['content']


# 5. Ejecución y prueba del proyecto
## Prompt:

    ¿Cuáles son los pasos para ejecutar el proyecto localmente y realizar pruebas?

Respuesta esperada: 
    

        Para ejecutar el proyecto, sigue estos pasos:

        1.- Asegúrate de que el entorno virtual esté activado.
        2.- Ejecuta el servidor Flask: python app.py
        3.- Abre un navegador y ve a  http://127.0.0.1:5000 para interactuar con el chatbot.

# 6. Documentación del proceso
## Prompt:

    ¿Qué información debería incluir en el archivo README.md para documentar el proceso de desarrollo?

- Respuesta esperada: 
    ```bash
    El archivo README.md debe incluir:

    Descripción del proyecto.
    Estructura del proyecto.
    Instrucciones de instalación y configuración.
    Prompts utilizados y respuestas de la IA.
    Pasos para ejecutar y probar el proyecto.

# Ejercicio 2: Evaluación y Refinamiento de Prompts

En esta segunda parte del proyecto, evaluamos y refinamos los prompts utilizados en el primer ejercicio para mejorar la calidad de las respuestas obtenidas de la IA. A continuación, se documenta todo el proceso seguido.

## 1. Revisión de Prompts Anteriores

A continuación se presentan los prompts originales utilizados en el primer ejercicio, junto con un análisis de su efectividad:

### Prompts Originales

1. **Configuración del entorno de desarrollo**
   - **Prompt:** 
     > ¿Cómo puedo configurar un entorno de desarrollo adecuado para un chatbot web usando Flask y una API de IA?
   - **Análisis:** Este prompt es claro, pero podría ser más específico al mencionar las dependencias necesarias.

2. **Creación de la interfaz web**
   - **Prompt:**
     > Proporcióname un código HTML y CSS básico para la interfaz de un chatbot.
   - **Análisis:** El prompt es conciso, pero no especifica elementos como el diseño responsivo o la interacción de usuario.

3. **Configuración del Backend con Flask**
   - **Prompt:**
     > ¿Cómo puedo configurar un servidor backend usando Flask para recibir mensajes del frontend?
   - **Análisis:** Este prompt es efectivo, pero podría incluir detalles sobre la gestión de errores y la seguridad.

4. **Integración de la API de IA**
   - **Prompt:**
     > ¿Cómo puedo autenticar y usar la API de OpenAI en mi aplicación Flask?
   - **Análisis:** El prompt es útil, pero no menciona la gestión de errores o la estructura de la respuesta.

5. **Ejecución y prueba del proyecto**
   - **Prompt:**
     > ¿Cuáles son los pasos para ejecutar el proyecto localmente y realizar pruebas?
   - **Análisis:** Es claro, pero podría ser más detallado sobre la configuración del entorno.

## 2. Refinamiento de Prompts

Identificamos dos prompts que podrían mejorarse:

### Prompt Refinado 1: Configuración del entorno de desarrollo

- **Versión Refinada:**
  > ¿Cuáles son los pasos detallados para configurar un entorno de desarrollo adecuado para un chatbot web usando Flask y una API de IA? Incluye la instalación de Python, la creación de un entorno virtual y la instalación de dependencias específicas como Flask, flask-cors, y requests.

- **Justificación:** Este cambio mejora la claridad y la especificidad, lo que facilita obtener una respuesta más completa y útil.

### Prompt Refinado 2: Creación de la interfaz web

- **Versión Refinada:**
  > Proporcióname un código HTML y CSS básico para la interfaz de un chatbot, asegurándote de incluir un diseño responsivo y elementos de interacción del usuario, como un campo de entrada y un botón de envío.

- **Justificación:** Este refinamiento agrega detalles que guiarán mejor a la IA, lo que podría resultar en un código más completo y adecuado para el propósito.

## 3. Prueba de Prompts Refinados

Utilizamos los prompts refinados con la IA y documentamos las respuestas obtenidas.

### Respuestas a los Prompts Refinados

1. **Respuesta al Prompt Refinado 1:**
   - **Respuesta:** 
   ```markdown
   Para configurar un entorno de desarrollo para un chatbot web con Flask, sigue estos pasos:
   1. Instala Python y pip si no lo tienes ya.
   2. Crea un entorno virtual:
      ```bash
      python -m venv venv
      ```
   3. Activa el entorno virtual:
      - En Windows:
        ```bash
        venv\Scripts\activate
        ```
      - En macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
   4. Instala las dependencias necesarias:
      ```bash
      pip install Flask flask-cors requests python-dotenv
      ```
1. **Respuesta al Prompt Refinado 2:**

        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Chatbot Web</title>
            <link rel="stylesheet" href="css/styles.css">
        </head>
        <body>
            <header>
                <h1>Chatbot Web</h1>
            </header>
            <main>
                <div id="chat-container"></div>
                <div id="input-container">
                    <input type ="text" id="user-input" placeholder="Escribe tu mensaje aquí...">
                    <button id="send-btn">Enviar</button>
                </div>
            </main>
            <script src="js/script.js"></script>
        </body>
        </html>

## Comparación de Respuestas
Comparación del Prompt Refinado 1:

    Respuesta Original: Proporcionaba una guía básica, pero carecía de detalles sobre las dependencias específicas.

    Respuesta Refinada: Incluye pasos detallados y menciona dependencias específicas, lo que mejora la claridad y utilidad de la respuesta.


Comparación del Prompt Refinado 2:

    Respuesta Original: Ofrecía un código HTML básico, pero no incluía consideraciones sobre diseño responsivo.
    Respuesta Refinada: Proporciona un código más completo y considera la interacción del usuario, lo que resulta en una mejor experiencia de usuario.
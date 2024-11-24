# Chatbot Web con Flask

Este proyecto es un chatbot web desarrollado en Flask que utiliza la API de Mistral o OpenAI para responder a preguntas y proporcionar información. El chatbot puede manejar funciones de JavaScript y proporcionar ejemplos de código formateados.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

El chatbot permite a los usuarios interactuar mediante un formulario de entrada. Los mensajes del usuario se envían a la API de Mistral o OpenAI, y las respuestas se muestran en la interfaz de usuario. El código que se muestra en las respuestas está formateado para una mejor legibilidad.

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Python 3.6 o superior
- pip (gestor de paquetes de Python)
- Flask
- Flask-CORS
- requests
- O puedes ejecutar directamente el requirements.txt

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Angel-Lizarzado/Chatbot-Immune.git
   cd Chatbot-Immune


2. **Crea un entorno virtual (opcional pero recomendado):**

- python -m venv venv

- En linux usa `source venv/bin/activate` 
- En Windows usa `venv\Scripts\activate`

3. **Instala las dependencias: (opcional pero recomendado):**
- `pip install -r requirements.txt`

4. **Configura tus claves API:**
- Crea un archivo .env con las api
```bash
MISTRAL_API_KEY=MistralApiKey
OPENAI_API_KEY=OpenAiApiKey
```

## **Uso:**

1. **Ejecuta la aplicación:**
```bash
python app.py
```

2. **Abre tu navegador y ve a:**
```bash
http://127.0.0.1:5000/
```

3. **Interactúa con el chatbot:**
```bash
http://127.0.0.1:5000/
```

# Estructura de proyecto


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

 
# Contribuciones
## Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama ```git checkout -b feature/nueva-funcionalidad.```
3. Realiza tus cambios y haz un commit ```git commit -m 'Añadir nueva funcionalidad'```
4. Envía un pull request.
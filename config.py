import os
from dotenv import load_dotenv

# Cargar variables de entorno desde el archivo .env
load_dotenv()

MISTRAL_API_KEY = os.getenv('MISTRAL_API_KEY')
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

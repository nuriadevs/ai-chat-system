  

# Backend Chat IA

  

Este proyecto implementa el backend de un sistema de chat con inteligencia artificial utilizando FastAPI y OpenAI. Permite gestionar conversaciones entre usuarios y un modelo de lenguaje avanzado, proporcionando respuestas automáticas.

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)

[![OpenAI API](https://img.shields.io/badge/OpenAI-4A4A55?style=for-the-badge&logo=openai)](https://platform.openai.com/)

[![Python](https://img.shields.io/badge/Python-3.13.3-blue?style=for-the-badge&logo=python&logoColor=yellow)](https://www.python.org/downloads/release/python-3133/)

  
  
  

## Propósito

  

El objetivo es ofrecer una API robusta y escalable para integrar chatbots inteligentes en aplicaciones web. El backend se comunica con un frontend (pincja aquí para verlo) que muestra la interfaz de chat al usuario.

  

## Tecnologías utilizadas

  

-  **FastAPI**: Framework para construir APIs rápidas y modernas en Python.

  

-  **OpenAI API**: Para generar respuestas automáticas usando modelos de lenguaje.

  

-  **Python 3.13.3**

  

-  **CORS Middleware**: Permite la comunicación segura entre frontend y backend.

  

## Variables de entorno

  

Crea el archivo `.env` en la raíz del directorio y define la siguiente variable:

  
  

```env

OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>

```

  

## Instalación

  

  

1. Clona el repositorio:

  

```bash

git  clone  https://github.com/nuriadevs/ai-chat-system.git

cd  backend-chat

```

  

  

2. Instala las dependencias:

  

```bash

pip  install  -r  requirements.txt

```

  

  

## Ejecución

  

  

Inicia el servidor de desarrollo:

  

```bash

uvicorn  app.main:app  --reload  --port  8000

```

  

  

El backend estará disponible en `http://localhost:8000`.

  

  

## Integración con el frontend

  

  

Este backend está diseñado para conectarse con un frontend que muestra el chat al usuario.

  

  

## Endpoints

  

  

-  `POST /chat`: Envía mensajes y recibe respuestas del modelo de IA.

  

-  `GET /`: Endpoint de prueba para verificar que el backend está activo.

  

## Tests

  

Para probar los test de prueba, ejecuta lo siguiente en el directorio raíz de la aplicación:

```bash

pytest  o  pytest  -s

```

  

## Resumen

  

- No olvides crear el archivo .env con la variable de **OpenAI**.

  

- Este proyecto esta pensando para que sea escalable.

  
  

## 📬 Contacto

  

Si quieres enviarme cualquier mensaje, sugerencia o propuesta de colaboración, no dudes en escribirme a través de mis redes sociales. ¡Un saludo!

  
  

### ¡Gracias por visitar este repositorio! 🚀
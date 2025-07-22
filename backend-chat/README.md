# Backend Chat AI

This project implements the backend of a chat system with artificial intelligence using FastAPI and OpenAI. It allows managing conversations between users and an advanced language model, providing automatic responses.

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/) [![OpenAI API](https://img.shields.io/badge/OpenAI-4A4A55?style=for-the-badge&logo=openai)](https://platform.openai.com/) [![Python](https://img.shields.io/badge/Python-3.13.3-blue?style=for-the-badge&logo=python&logoColor=yellow)](https://www.python.org/downloads/release/python-3133/)


## Technologies 

-   **FastAPI**: Framework for building fast and modern APIs in Python.
    
-   **OpenAI API**: For generating automatic responses using language models.
    
-   **Python 3.13.3**
    
-   **CORS Middleware**: Enables secure communication between frontend and backend.
    

## Environment Variables

Create the `.env` file in the root directory and define the following variable:

```env
OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>
```

## Installation

1.  Clone the repository:

```bash
git clone https://github.com/nuriadevs/ai-chat-system.git
cd backend-chat
```

2.  Install dependencies:

```bash
pip install -r requirements.txt
```

## Start

Start the development server:

```bash
uvicorn app.main:app --reload --port 8000
```

The backend will be available at `http://localhost:8000`.

## Frontend Integration

This backend is designed to connect with a frontend that displays the chat to the user.

## Endpoints

-   `POST /chat`: Send messages and receive responses from the AI model.
    
-   `GET /`: Test endpoint to verify that the backend is active.
    

## Tests

To run the test suite, execute the following in the application's root directory:

```bash
pytest or pytest -s

```

## Summary

-   Don't forget to create the .env file with the **OpenAI** variable.
    
-   This project is designed to be scalable.
    

## 📬 Contact

If you want to send me any message, suggestion, or collaboration proposal, don't hesitate to write to me through my social networks. Greetings!

### Thank you for visiting this repository! 🚀
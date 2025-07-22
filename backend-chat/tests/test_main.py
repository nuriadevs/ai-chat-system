import pytest
import os
from fastapi.testclient import TestClient
import openai
from dotenv import load_dotenv

# Load the .env file
load_dotenv()

# Assign the API key to openai
openai.api_key = os.getenv("OPENAI_API_KEY")

from app.main import app


def test_root_endpoint():
    client = TestClient(app)
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}

def test_chat_message():
    """Test with a single message"""
    client = TestClient(app)
    
    payload = {
        "message": "Hello, what is the capital of France?"
    }
    
    response = client.post("/chat/", json=payload)
    
    print(f"Status code: {response.status_code}")
    print(f"Response body: {response.text}")
    
    if response.status_code == 422:
        error_detail = response.json()
        print(f"Validation errors: {error_detail}")
    
    assert response.status_code == 200
    
    response_data = response.json()
    assert "response" in response_data
    assert isinstance(response_data["response"], str)
from pydantic import BaseModel


""" This file defines the data models for chat requests."""
class ChatRequest(BaseModel):
    message: str



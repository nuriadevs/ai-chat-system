from typing import List, Dict, Any
from app.services.ai.llm import run_llm
from app.models.ai_message import AIMessage

"""
Services for handling AI chat interactions.
This module provides functionality to run AI chat sessions,
including sending user messages and receiving AI responses.
"""
async def run_ai(user_message: str, tools: List[Any]) -> Dict[str, Any]:
    # Create an AIMessage instance for the user's message
    user_ai_message = AIMessage(role="user", content=user_message)

    try:
        # Call the run_llm function with the user's message
        response = await run_llm([user_ai_message])

        ai_message = AIMessage(
            role=getattr(response, 'role', 'assistant'),
            content=getattr(response, 'content', '')
            )

        return {"response": ai_message.content}

    except Exception as e:
        print(f"Error in run_ai: {e}")
        return {"response": "An error occurred while processing your message."}


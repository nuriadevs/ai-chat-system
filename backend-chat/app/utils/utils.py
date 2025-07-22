from typing import List, Optional, Any, Dict
from app.models.ai_message import AIMessage

def format_ai_messages(messages: List[AIMessage]) -> List[Dict[str, Any]]:
    """Convierte una lista de AIMessage al formato compatible con OpenAI."""
    formatted = []
    for msg in messages:
        result = {
            "role": msg.role,
            "content": msg.content or ""
        }
        if msg.tool_calls:
            result["tool_calls"] = msg.tool_calls
        if msg.tool_call_id:
            result["tool_call_id"] = msg.tool_call_id
        formatted.append(result)
    return formatted
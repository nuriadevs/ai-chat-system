from app.utils.utils import format_ai_messages
from typing import List, Optional, Any
from app.models.ai_message import AIMessage
from app.config.openai_config import openai_client
from app.services.ai.system_prompt import system_prompt as defaultSystemPrompt
from app.constants.messages import LLM_CONSTANTS


"""
    Execute Language Model

    Args:
        messages: Messages list of conversation messages
        temperature: Temperature for generation (default from constants)
        system_prompt: Optional system prompt

    Returns:
        Model response message
"""
async def run_llm(
    messages: List[AIMessage],
    temperature: float = LLM_CONSTANTS.DEFAULT_TEMPERATURE,
    system_prompt: Optional[str] = None
) -> Any:

    openai_messages = format_ai_messages(messages)

   # Call to OpenAI Chat Completion
    response = await openai_client.chat.completions.create(
        model=LLM_CONSTANTS.MODEL_NAME,
        temperature=temperature,
        messages= [
            {
                "role": "system", 
                "content": system_prompt or defaultSystemPrompt
            },
            *openai_messages
        ]

    )


    # Clean up the response message
    message = response.choices[0].message
    if message.tool_calls is not None and len(message.tool_calls) == 0:
        message.tool_calls = None

    return message

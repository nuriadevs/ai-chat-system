from enum import Enum
from dataclasses import dataclass
from typing import Final

@dataclass(frozen=True)
class LLMConstants:
    # Constants for Language Model (immutable)
    DEFAULT_TEMPERATURE: float = 0.7
    MODEL_NAME: str = 'gpt-4o-mini'
    ERROR_MESSAGE: str = 'Error to process the request with the language model'

# Global constants for the application
LLM_CONSTANTS: Final[LLMConstants] = LLMConstants()




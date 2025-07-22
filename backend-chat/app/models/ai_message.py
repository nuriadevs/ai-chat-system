from typing import List, Dict, Optional, Literal, Any, Callable, Awaitable
from dataclasses import dataclass


@dataclass
class AIMessage:
    """ Defines the type of AI message """
    
    role: Literal['user', 'assistant', 'tool']
    content: Optional[str] = None
    tool_call_id: Optional[str] = None
    tool_calls: Optional[List[Dict[str, Any]]] = None
    metadata: Optional[Dict[str, Any]] = None


""" Defines the type of tool used by the AI """
ToolFn = Callable[[Dict[str, Any]], Awaitable[Any]]
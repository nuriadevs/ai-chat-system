from app.responses.base import BaseResponse

class ChatResponse(BaseResponse):
    """
    Class representing a response for chat-related API endpoints.
    """
    response: str

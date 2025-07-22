from fastapi import APIRouter, HTTPException
from app.models.chat import ChatRequest
from app.services.ai.chat import run_ai
from app.responses.chat import ChatResponse


router = APIRouter(
    prefix="/chat",
    tags=["chat"],
    responses={404: {"description": "Not found"}},
)

@router.post("/", response_model=ChatResponse)
async def ask_chat(request: ChatRequest):
    try:
        # Call the AI service with the provided message
        result = await run_ai(request.message, [])
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

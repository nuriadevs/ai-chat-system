from fastapi import APIRouter

from app.api.routes.public.hello import public_router
from app.api.routes.ai.chat import router as chat_router


api_router = APIRouter()

# public
api_router.include_router(public_router)
# ai
api_router.include_router(chat_router)
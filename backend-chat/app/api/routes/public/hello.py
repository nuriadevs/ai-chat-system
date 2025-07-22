from fastapi import APIRouter


public_router = APIRouter(
    prefix="/index",
    tags=["public"],
    responses={404: {"description": "Not Found"}},
)

@public_router.get("/")
async def root():
    return {"message": "Hello World, I'm backend chat app."}
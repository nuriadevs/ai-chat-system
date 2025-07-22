from fastapi import FastAPI
from app.config.cors import setup_cors

from app.api.api import api_router

app = FastAPI(title="Backend chat", version="1.0.0")

# Cors configuration
setup_cors(app)

# Application routes
app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "Hello World"}
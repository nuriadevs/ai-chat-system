from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

"""

 Configuration for CORS (Cross-Origin Resource Sharing) in a FastAPI application.
 Permits requests from any origin during development; you can restrict it to 
 specific domains later.
 
"""
def setup_cors(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
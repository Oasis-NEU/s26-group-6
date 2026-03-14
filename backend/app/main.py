from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import menu

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite's default port
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

app.include_router(menu.router)

@app.get("/")
def root():
    return {"message": "Oasis API running"}

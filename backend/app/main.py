from fastapi import FastAPI
from app.routers import menu, auth, vendors

app = FastAPI()

app.include_router(menu.router)
app.include_router(auth.router)
app.include_router(vendors.router)

@app.get("/")
def root():
    return {"message": "Oasis dineoncampus API running"}

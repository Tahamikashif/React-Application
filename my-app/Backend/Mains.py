from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
from main import run_agent
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptData(BaseModel):
    prompt: str

@app.post("/run-agent")
async def agent_api(data: PromptData):
    reply = await run_agent(data.prompt)
    return {"agent_reply": reply}

@app.get("/")
def home():
    return {"message": "Python Agent API running ✅"}

if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)


from agents import Agent, Runner, OpenAIChatCompletionsModel, function_tool
from openai import AsyncOpenAI
from dotenv import load_dotenv
import os
import asyncio
load_dotenv(override=True)
gemini_api = os.getenv("GEMINI_API_KEY")
if not gemini_api:
    raise ValueError("Gemini api is not found")

@function_tool
async def Info():
    print("Datas Ecommerce Fire...")

    dats = [
        {"title": "UrbanFlex Tee", "message": "Mens shirt", "price": 2000},
        {"title": "AeroDrip T-Shirt", "message": "Mens T-shirt", "price": 1200},
        {"title": "StreetRush Sneakers", "message": "Mens shoes", "price": 1300},
        {"title": "AirGlide Walkers", "message": "Walkers", "price": 1000},
        {"title": "DriftFlex Snapback", "message": "Snapback Cap", "price": 2100},
        {"title": "TrailGuard Sun Cap", "message": "Sun Cap", "price": 900},
        {"title": "FlexBristle Beard Brush", "message": "Beard Brush", "price": 200},
        {"title": "CleanEdge Toothbrush", "message": "Toothbrush", "price": 1500},
        {"title": "BristlePro 360", "message": "Brush", "price": 1340}
    ]

    return dats

client = AsyncOpenAI(api_key=gemini_api,base_url="https://generativelanguage.googleapis.com/v1beta/openai/")
Model = OpenAIChatCompletionsModel(model="gemini-2.5-flash",openai_client=client)

Agent1 = Agent(
    name="Ratan lal",
    instructions="""
You are my ecommerce assistant.
Whenever user asks about shirts, shoes, or items, call the tool Info.
-if user ask anything give name Tool related call Tool "Info".
""",
    model=Model,
    tools=[Info]
)

async def run_agent(prompt:str):
    result = await Runner.run(
        starting_agent=Agent1,
        input=prompt
    )
    return result.final_output

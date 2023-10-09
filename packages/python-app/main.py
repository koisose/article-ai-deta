from fastapi import FastAPI
from picture import generate
from palm import predict
from dotenv import load_dotenv
from models import Item
load_dotenv()
app = FastAPI()

@app.post("/generate-image")
def generate_image(item: Item):
    stability_key = os.getenv("STABILITY_KEY")
    return generate(item.text,stability_key)
@app.get("/generate-text")
def generate_text():
    return predict()
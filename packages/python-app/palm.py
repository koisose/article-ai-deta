import vertexai
from vertexai.language_models import TextGenerationModel
from deta import Deta
db = deta.Drive("s")
def predict():
    vertexai.init(project="true-ion-401008", location="us-central1")
    parameters = {
      "max_output_tokens": 1024,
    "temperature": 0.2,
    "top_p": 0.8,
    "top_k": 40
    }
    model = TextGenerationModel.from_pretrained("text-bison")
    response = model.predict(
    """create article with title \"ai will save humanity\" without title """,
    **parameters
    )
    return response.text
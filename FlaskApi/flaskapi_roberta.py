# flaskapi_roberta.py
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

MODEL_ID = os.getenv("MODEL_ID", "Adnan855570/Roberta_base_model")  # <-- your HF repo
MAX_LEN = int(os.getenv("MAX_LEN", "256"))
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
torch.set_num_threads(int(os.getenv("TORCH_THREADS", "2")))

app = Flask(__name__)
CORS(app)

# Load straight from the Hub (public => no token needed)
try:
    tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
    model = AutoModelForSequenceClassification.from_pretrained(MODEL_ID)
    # use labels from your config if present; otherwise fallback
    id2label = getattr(model.config, "id2label", {0: "NON_HATE", 1: "HATE"})
    model.to(DEVICE)
    model.eval()
except Exception as e:
    tokenizer, model = None, None
    id2label = {0: "NON_HATE", 1: "HATE"}
    print(f"[BOOT] failed to load model: {e}")

@app.get("/")
def health():
    return {"status": "ok" if (model and tokenizer) else "error"}

@app.post("/predict")
def predict():
    if not (model and tokenizer):
        return jsonify({"error": "model not loaded"}), 500

    data = request.get_json(silent=True) or {}
    texts = data.get("texts")
    if not texts or not isinstance(texts, list):
        return jsonify({"error": "Provide 'texts': [ ... ]"}), 400

    enc = tokenizer(texts, return_tensors="pt", truncation=True, padding=True, max_length=MAX_LEN)
    enc = {k: v.to(DEVICE) for k, v in enc.items()}
    with torch.no_grad():
        logits = model(**enc).logits
        probs = torch.softmax(logits, dim=-1).cpu().tolist()
        preds = logits.argmax(dim=-1).cpu().tolist()

    labels = [id2label[p] for p in preds]
    if len(texts) == 1:
        return jsonify({
            "label": labels[0],
            "probs": {id2label[i]: float(probs[0][i]) for i in range(len(probs[0]))},
            "pred": preds[0]
        })
    return jsonify({
        "labels": labels,
        "probs": [{id2label[i]: float(p[i]) for i in range(len(p))} for p in probs],
        "preds": preds
    })

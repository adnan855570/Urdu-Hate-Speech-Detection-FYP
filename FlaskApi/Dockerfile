FROM python:3.10-slim

WORKDIR /app

ENV PIP_NO_CACHE_DIR=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Optional: git helps if you ever pull from private HF repos
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

# Render injects $PORT; EXPOSE is just doc
EXPOSE 5000

# IMPORTANT: module_name:app_object must match your file
# If your file is ROBERTA_BASE_API.py and the Flask object is named "app":
CMD ["gunicorn", "-w", "2", "-k", "gthread", "-t", "120", "ROBERTA_BASE_API:app", "-b", "0.0.0.0:${PORT}"]

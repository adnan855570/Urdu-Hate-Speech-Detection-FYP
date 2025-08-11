FROM python:3.10-slim

WORKDIR /app

ENV PIP_NO_CACHE_DIR=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Optional but handy if you ever pull from HF repos
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

# Document the port; Render injects $PORT at runtime
EXPOSE 5000

# IMPORTANT: use a shell so $PORT expands; and point to the correct module:file
CMD ["sh", "-c", "gunicorn -w 2 -k gthread -t 120 flaskapi_roberta:app -b 0.0.0.0:${PORT}"]

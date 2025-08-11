FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

COPY . .

# Environment variables (set on Render)
# ENV PORT=2000

EXPOSE 2000

CMD ["npm", "start"]



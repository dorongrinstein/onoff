FROM node:18.16.1-slim AS base

WORKDIR /app

COPY package*.json ./

RUN npm install --production && npm cache clean --force
COPY . .
USER node
CMD ["node", "app.js"]

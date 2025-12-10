FROM node:22.11.0-slim


WORKDIR /app

COPY package*.json ./
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

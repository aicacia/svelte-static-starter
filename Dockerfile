FROM --platform=linux/amd64 node:20-alpine3.17 as node-builder
RUN npm install -g npm@9

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.25-alpine3.17-slim

COPY --from=node-builder /app/build /usr/share/nginx/html
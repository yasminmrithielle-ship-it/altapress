FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY App.tsx app.json index.ts tsconfig.json ./
COPY assets ./assets
COPY branding ./branding

RUN npm run build:web

FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv/dist

EXPOSE 8080

FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY App.tsx app.json catalog.ts index.ts tsconfig.json ./
COPY assets ./assets
COPY branding ./branding

RUN npm run build:web

FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY server.js ./server.js
COPY --from=build /app/dist ./dist

EXPOSE 8080
CMD ["node", "server.js"]

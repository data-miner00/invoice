# syntax=docker/dockerfile:1

FROM node:18-alpine

LABEL version="1.0"

RUN npm i -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm prisma:gen
RUN pnpm build

RUN pnpm prisma:deploy

# Cant find the actual file
RUN pnpm prisma:seed

CMD ["pnpm", "start"]

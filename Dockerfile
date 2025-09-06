#Etapa de build
FROM node:20-alpine AS builder

WORKDIR /email_service

RUN npm install -g pnpm 

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN npm run build

RUN npm prume --prod

#Etapa de execução
FROM node:22-alpine

WORKDIR /email_service

COPY --from=builder . .

EXPOSE 5050

CMD [ "pnpm", "start"]
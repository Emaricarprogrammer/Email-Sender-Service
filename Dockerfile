# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /email_service

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

RUN npm prune --prod

# Etapa de execução
FROM node:20-alpine

WORKDIR /email_service

# Copiar apenas o essencial da build
COPY --from=builder /email_service/dist ./dist
COPY --from=builder /email_service/package.json ./
COPY --from=builder /email_service/node_modules ./node_modules

EXPOSE 5050

CMD ["npm","start"]

FROM node:22-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package*.json ./

EXPOSE 80

RUN npm install --omit=dev

CMD ["npm", "run", "start"]

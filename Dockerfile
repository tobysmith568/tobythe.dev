FROM node:17 AS compile

WORKDIR /opt/ng
COPY package.json package-lock.json ./
RUN npm ci

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build:ssr

FROM node:17-alpine as run
COPY --from=compile /opt/ng/dist/tobythe-dev /dist/tobythe-dev

EXPOSE 4000
CMD [ "node", "/dist/tobythe-dev/server/main.js" ]

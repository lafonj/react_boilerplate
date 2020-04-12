FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build \
  && npm install -g serve

EXPOSE 5000

CMD [ "serve", "-s", "build" ]

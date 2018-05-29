FROM node:alpine

WORKDIR /app
ADD . /app

RUN yarn install

CMD ["node", "producer.js"]
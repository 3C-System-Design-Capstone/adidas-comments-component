FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

ARG HOSTNAME
ENV HOSTNAME localhost

ARG PORT_FOR_XHR
ENV PORT_FOR_XHR 80

RUN npm run build-production

CMD [ "npm", "start"]
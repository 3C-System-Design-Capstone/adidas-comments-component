FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

# I include these environment variables in the dockerfile, because 
# they are the ones passed to the front-end via webpack
# all other environment variables are loaded after the server starts and, so, 
# can be passed in using the node package require('dotenv').config();
# TODO. It might be less confusing just to pass all env vars in here
ARG HOSTNAME
ENV HOSTNAME localhost

ARG PORT_FOR_XHR
ENV PORT_FOR_XHR 80

RUN npm run build-production

CMD [ "npm", "start"]
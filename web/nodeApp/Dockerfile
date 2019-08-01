FROM node:lts-alpine
RUN mkdir -p /usr/src/app/web/nodeApp
WORKDIR /usr/src/app/web/nodeApp
COPY package.json /usr/src/app/web/nodeApp
RUN npm install
COPY . /usr/src/app/web/nodeApp
RUN export PATH="$(npm bin):$PATH"
# Dockerfile for building production-ready NodeJS APi
FROM node:lts
LABEL maintainer='mail@christianversloot.nl'
WORKDIR /usr/src/app
RUN npm install pm2 -g
COPY ./transpiled-app ./transpiled-app
COPY ./package.json ./package.json
RUN npm install --production
CMD ["pm2-runtime", "./transpiled-app/backend.js"]
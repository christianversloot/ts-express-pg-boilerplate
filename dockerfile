# Dockerfile for building production-ready NodeJS APi
FROM node:lts
LABEL maintainer='mail@christianversloot.nl'
WORKDIR /usr/src/app
COPY ./package.json ./package.json
RUN npm install pm2 -g
RUN npm install --production
COPY ./transpiled-app ./transpiled-app
CMD ["pm2-runtime", "./transpiled-app/pm2.config.js"]
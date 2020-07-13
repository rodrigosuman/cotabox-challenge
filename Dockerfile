FROM node:alpine

WORKDIR /usr/api

COPY ./backend/package*.json ./

COPY ./backend .

EXPOSE 3333

RUN npm install



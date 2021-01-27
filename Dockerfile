FROM node:14
WORKDIR /home/Renan/Desktop/Estudos/Dockerfiles/clean-node-api
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 5000
CMD npm start
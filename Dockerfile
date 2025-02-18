FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache bash git 

COPY ./* /app/

EXPOSE 5173

RUN npm install

CMD [ "bash" ]

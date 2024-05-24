FROM node:20-buster
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . ./

ENV APP_URL=https://www.annasundberg.se

RUN npm install
RUN npm run build
EXPOSE 4000
CMD ["npm", "run","start"]
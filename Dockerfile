FROM node:lts-bullseye AS build

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

RUN yarn run build


### Stage 2
FROM nginx:alpine

ADD ./config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /var/www/app/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
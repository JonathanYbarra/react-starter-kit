FROM node:hydrogen-alpine AS builder

RUN export

WORKDIR /build

COPY package*.json ./

RUN yarn install

COPY . .
RUN yarn build

##############################

FROM nginx:alpine AS production

ADD ./config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /var/www/app/

EXPOSE 80
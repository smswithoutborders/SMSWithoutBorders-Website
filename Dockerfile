FROM node:20-alpine as build
WORKDIR /app

COPY package.json ./

RUN yarn install --no-lockfile

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf.template /etc/nginx/conf.d/default.template

COPY scripts/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80
EXPOSE 443

CMD ["/docker-entrypoint.sh"]

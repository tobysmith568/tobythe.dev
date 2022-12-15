FROM nginx:1.23.3-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY ./src/* ./

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

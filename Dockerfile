FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY ./src/* ./

ENTRYPOINT ["nginx", "-g", "daemon off;"]

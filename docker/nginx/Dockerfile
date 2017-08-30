FROM alpine:latest

RUN apk add --update nginx && \
    rm -rf /var/cache/apk/* && \
    mkdir -p /tmp/nginx/

# Copying nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/conf.d/default.conf

# Copying application files
COPY public /usr/share/nginx/html

ENV PROFILE=development

EXPOSE 80/tcp

ENTRYPOINT ["nginx"]
CMD [ "-g", "daemon off;" ]
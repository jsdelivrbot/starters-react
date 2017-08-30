FROM mhart/alpine-node

WORKDIR /usr/app

# Copying application files
COPY . .

RUN npm install

ENV PROFILE=development

EXPOSE 8080/tcp

ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]
FROM mhart/alpine-node

WORKDIR /usr/app

# Copying application files
COPY . .

RUN npm install

ENV PORT=8080
ENV PROFILE=development

EXPOSE ${PORT}/tcp

ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]
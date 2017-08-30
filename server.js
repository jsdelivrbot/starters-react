const express = require('express');
const path = require('path');
const morgan = require('morgan');
const winston = require('winston');
const config = require('./config');

const app = express();

app.use(morgan(config.morgan.format));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (request, response) => {
    response.sendFile('index.html', { root : config.paths.public });
});

app.listen(config.port, () => {
    winston.info(`Server is listening on port ${config.port}`);
});
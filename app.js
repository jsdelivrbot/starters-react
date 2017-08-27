const express = require('express');
const morgan = require('morgan');
const winston = require('winston');

const app = express();

app.use(morgan('dev'));

app.get('/', (request, response) => {
    response.send('Test response');
});

app.listen(3000, () => {
    winston.info('Application listens on port 3000');
});


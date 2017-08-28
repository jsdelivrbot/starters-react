const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (request, response) => {
    response.send('Test response using Babel');
});

app.post('/', (request, response) => {
    response.send('Test response using Babel');
});

app.listen(3000, () => {
    winston.info('Application listens on port 3000');
});


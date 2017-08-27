const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (request, response) => {
    response.send('Test response');
});

app.listen(3000, () => {
    console.log('Application listens on port 3000');
});


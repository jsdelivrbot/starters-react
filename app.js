const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Test response');
});

app.listen(3000, () => {
    console.log('Application listens on port 3000');
});


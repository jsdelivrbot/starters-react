const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

import indexRoutes from './routes/index.routes';
import errorRoutes from './routes/error.routes';

const app = express();

const initializeMiddleware = (app) => {
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
};

const initializeRoutes = app => {
    app.use(indexRoutes);
    // TODO: Initialize application routes
    app.use(errorRoutes);
};

const startApplication = (app) => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        winston.info(`Server listens on port ${port}`);
    });
};

initializeMiddleware(app);
initializeRoutes(app);
startApplication(app);
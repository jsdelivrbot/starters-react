import express from 'express';
import morgan from 'morgan';
import winston from 'winston';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { loadYaml } from './utils/yaml.utils';
import path from 'path';
import _ from 'lodash';

import indexRoutes from './routes/index.routes';
import errorRoutes from './routes/error.routes';


const initializeConfiguration = profile => {
    const configPath = path.resolve(__dirname, 'config');
    const applicationConfiguration = loadYaml(getApplicationConfigPath(configPath));
    const applicationProfileConfiguration = loadYaml(getApplicationConfigPath(configPath, profile));
    return {
        ...applicationConfiguration,
        ...applicationProfileConfiguration,
        profile
    };
};

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
    const port = getPort();
    app.listen(port, () => {
        winston.info(`Server listens on port ${port}`);
    });
};

const getProfile = () => process.env.PROFILE || 'production';
const getPort = () => process.env.PORT || config.server.port;
const getApplicationConfigFileName = (profile) => _.template('application<%= profile %>.config.yaml')({ profile: !profile ? '' : `-${profile}` });
const getApplicationConfigPath = (configPath, profile) => {
    return path.resolve(configPath, getApplicationConfigFileName(profile));
};

const app = express();
const config = initializeConfiguration(getProfile());

winston.info(`Application Configuration: `, config);

initializeMiddleware(app);
initializeRoutes(app);
startApplication(app);

export default app;
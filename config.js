const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const _ = require('lodash');
const winston = require('winston');

const getProfile = () => process.env.PROFILE || 'development'; //'production';

const getApplicationConfigFileName = (profile) => _.template('application<%= profile %>.config.yaml')({profile: !profile ? '' : `-${profile}`});
const getApplicationConfigPath = (configPath, profile) => {
    return path.resolve(configPath, getApplicationConfigFileName(profile));
};
const loadYamlFile = (path) => yaml.load(readFile(path));
const readFile = (path) => fs.readFileSync(path, 'UTF-8');

const initializeApplicationConfiguration = profile => {
    const configPath = path.resolve(__dirname, 'config');
    const applicationConfiguration = loadYamlFile(getApplicationConfigPath(configPath));
    const applicationProfileConfiguration = loadYamlFile(getApplicationConfigPath(configPath, profile));
    return _.merge({},
        applicationConfiguration,
        applicationProfileConfiguration,
        { profile }
    );
};

const initializePathsConfig = () => ({
    paths: {
        root: path.join(__dirname),
        node_modules: path.join(__dirname, 'node_modules'),
        public: path.join(__dirname, 'public'),
        dist: path.join(__dirname, 'public/dist'),
        main: path.join(__dirname, 'src/main'),
        test: path.join(__dirname, 'src/test')
    }
});

const initializeBabelConfig = () => ({
        babel: _.merge(
            {babelrc: false},
            JSON.parse(readFile('.babelrc'))
        )
});

const PROFILE_CONFIG = { profile: getProfile() };
const APPLICATION_CONFIG = initializeApplicationConfiguration();
const PATHS_CONFIG = initializePathsConfig();
const BABEL_CONFIG = initializeBabelConfig();

const CONFIG = _.merge({},
    PROFILE_CONFIG,
    APPLICATION_CONFIG,
    PATHS_CONFIG,
    BABEL_CONFIG
);

module.exports = CONFIG;
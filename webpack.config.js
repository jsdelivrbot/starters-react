const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const _ = require('lodash');
const config = require('./config');
const WebpackLoadersConfig = require('./webpack.loaders.config');
const WebpackPluginsConfig = require('./webpack.plugins.config');

const getDistAbsolutePublicPath = () => `/${path.relative(config.paths.dist, config.paths.public)}`;

const WEBPACK_CONFIG = {

    context: config.paths.main,
    entry: [ './app.jsx' ],

    resolve: {
        extensions: [ '.webpack.js', 'web.js', '.js', '.jsx' ]
    },

    output: {
        path: config.paths.dist,
        filename: config.webpack.output.filename,
        publicPath: '/dist/',
        chunkFilename: config.webpack.output.chunkFilename
    },

    devtool: config.webpack.devtool,

    node: {
        fs: 'empty'
    }

};

module.exports = _.merge(
    WEBPACK_CONFIG,
    WebpackLoadersConfig,
    WebpackPluginsConfig
);
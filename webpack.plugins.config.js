/**
 * Created by krzysztofkicinger on 29/08/2017.
 */
const DefinePlugin = require('webpack').DefinePlugin;
const AssetsPlugin = require('assets-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');
const config = require('./config');


const initializeCleanPlugin = () => {
    const pathsToClean = [ 'dist' ];
    const cleanOptions = { root: config.paths.public };
    return new CleanPlugin(pathsToClean, cleanOptions);
};

const initializeDefinePlugin = () => new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(config.profile)
});

const initializeAssetsPlugin = () => new AssetsPlugin({
    path: config.paths.dist,
    file: 'assets.json',
    prettyPrint: true
});

module.exports = {
    plugins: [
        initializeCleanPlugin(),
        initializeDefinePlugin(),
        initializeAssetsPlugin()
    ]
};

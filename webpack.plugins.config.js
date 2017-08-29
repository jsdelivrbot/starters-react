/**
 * Created by krzysztofkicinger on 29/08/2017.
 */
const DefinePlugin = require('webpack').DefinePlugin;
const AssetsPlugin = require('assets-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const _ = require('lodash');
const config = require('./config');


const initializeCleanPlugin = () => {
    const pathsToClean = [ 'dist', '*.html' ];
    const cleanOptions = { root: config.paths.public };
    return new CleanPlugin(pathsToClean, cleanOptions);
};

const initializeDefinePlugin = () => new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(config.profile)
});

const initializeAssetsPlugin = () => new AssetsPlugin({
    path: config.paths.dist,
    filename: 'assets.json',
    prettyPrint: true
});

const initializeCompressionPlugins = () => !config.build.compress ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
];

const initializeSecurityPlugins = () => !config.build.secure ? [] : [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: { warnings: true }
    })
];

const STANDARD_MODULES = [ initializeCleanPlugin(), initializeDefinePlugin(), initializeAssetsPlugin() ];
const COMPRESSION_MODULES = initializeCompressionPlugins();
const SECURITY_MODULES = initializeSecurityPlugins();

module.exports = {
    plugins: _.concat(STANDARD_MODULES , COMPRESSION_MODULES, SECURITY_MODULES)
};

/**
 * Created by krzysztofkicinger on 29/08/2017.
 */
const DefinePlugin = require('webpack').DefinePlugin;
const AssetsPlugin = require('assets-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');

const getProfile = () => process.env.PROFILE || 'production';

const PROFILE = getProfile();
const PUBLIC_PATH = path.resolve(__dirname, 'public');
const DIST_PATH = path.resolve(__dirname, 'dist');

const initializeCleanPlugin = () => {
    const pathsToClean = [ 'dist', '*.html' ];
    const cleanOptions = { root: PUBLIC_PATH };
    return new CleanPlugin(pathsToClean, cleanOptions);
};

const initializeDefinePlugin = () => new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(PROFILE)
});

const initializeAssetsPlugin = () => new AssetsPlugin({
    path: DIST_PATH,
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

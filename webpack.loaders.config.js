const config = require('./config');

const initializeBabelLoader = () => ({
    test: /\.js[x]$/,
    include: [ config.paths.main ],
    exclude: /node_modules|bower_components/,
    loader: `babel-loader?${JSON.stringify(config.babel)}`
});

module.exports = {
    module: {
        loaders: [
            initializeBabelLoader()
        ]
    }
};
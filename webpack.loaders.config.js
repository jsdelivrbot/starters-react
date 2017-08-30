const config = require('./config');

const initializeBabelLoader = () => ({
    test: /\.jsx?$/,
    include: [ config.paths.main ],
    exclude: [ /node_modules/ ],
    loader: `babel-loader?${JSON.stringify(config.babel)}`
});

module.exports = {
    module: {
        loaders: [
            initializeBabelLoader()
        ]
    }
};
const config = require('./config');

const initializeBabelLoader = () => ({
    test: /\.jsx$/,
    include: [ config.paths.main ],
    exclude: [ config.paths.node_modules ],
    loader: `babel-loader?${config.babel}`
});

module.exports = {
    module: {
        loaders: [
            initializeBabelLoader()
        ]
    }
};
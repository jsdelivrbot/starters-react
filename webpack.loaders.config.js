const config = require('./config');

const initializeBabelLoader = () => ({
    test: /\.jsx?$/,
    include: [ config.paths.main ],
    exclude: [ /node_modules/ ],
    loader: `babel-loader?${JSON.stringify(config.babel)}`
});

const initializePostCssLoader = () => ({
    test: /.pcss$/,
    include: config.paths.main,
    use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader'
    ]
});

module.exports = {
    module: {
        rules: [
            initializeBabelLoader(),
            initializePostCssLoader()
        ]
    }
};
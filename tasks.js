/**
 * Created by krzysztofkicinger on 29/08/2017.
 */
const hbs = require('handlebars');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const config = require('./config');
const winston = require('winston');

const compileAndFillInHbsTemplate = assets => {
    const source = readFile(fromPublic('index.hbs'));
    const template = hbs.compile(source);
    return template(createContext(assets));
};

const getAssets = () => JSON.parse(readFile(fromPublic('dist/assets.json')));
const createContext = assets => ({
    title: `React Starter - ${config.profile}`,
    bundle: assets.main.js
});
const createIndexHtml = content => fs.writeFileSync(fromPublic('index.html'), content, 'UTF-8');


const readFile = (path) => fs.readFileSync(path, 'UTF-8');
const fromPublic = (file) => path.resolve(__dirname, 'public', file);

const TASK_DEFINITIONS = {

    build: () =>
        new Promise((resolve, reject) => webpack(webpackConfig)
            .run((error, stats) => error ? reject(error) : resolve())),

    bundle: () =>
        run('build')
            .then(() => run('createHtml')),

    createHtml: () => new Promise((resolve, reject) => {
        createIndexHtml(compileAndFillInHbsTemplate(getAssets()));
        resolve();
    }),

};

function run(task) {
    const start = new Date();
    winston.info(`Starting '${task}'...`);
    return TASK_DEFINITIONS[task]()
            .then(() => winston.info(`Finished '${task}' after ${new Date().getTime() - start.getTime()}ms`))
            .catch(error => winston.error(error));
}

run(/^\w/.test(process.argv[2] || '') ? process.argv[2] : 'start' /* default */);

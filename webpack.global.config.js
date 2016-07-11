var webpackConfig = require('./webpack.config');

webpackConfig.output.libraryTarget = 'var';

module.exports = webpackConfig;

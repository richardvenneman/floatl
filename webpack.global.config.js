var webpackConfig = require('./webpack.config');

webpackConfig.output.filename = 'floatl.global.js';
webpackConfig.output.libraryTarget = 'var';

module.exports = webpackConfig;

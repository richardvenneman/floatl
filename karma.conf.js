var webpackConfig = require('./webpack.config');

webpackConfig.output = {
  entry: './lib/js/floatl.js',
  output: {
    library: 'floatl',
    libraryTarget: 'umd',
    filename: 'dist/js/floatl.js'
  }
};

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    plugins: [
      'karma-webpack',
      'karma-coffee-preprocessor',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-clear-screen-reporter',
      'karma-notify-reporter'
    ],
    files: [
      { pattern: 'node_modules/jquery/dist/jquery.js', watched: false },
      { pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', watched: false },
      { pattern: 'node_modules/jasmine-fixture/app/js/emmet.js', watched: false },
      { pattern: 'node_modules/jasmine-fixture/app/js/jasmine-fixture.coffee', watched: false },
      'test/*Test.js'
    ],
    preprocessors: {
      'test/*Test.js': ['webpack'],
      '**/*.coffee': ['coffee']
    },
    reporters: ['progress', 'clear-screen', 'notify'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: [(process.env.TRAVIS_CI === 'true'? 'Firefox' : 'PhantomJS')],
    singleRun: process.env.TRAVIS_CI === 'true',

    // Webpack
    webpack: webpackConfig,

    // SCSS
    scssPreprocessor: {
      options: {
        sourceMap: true
      }
    }
  });
};

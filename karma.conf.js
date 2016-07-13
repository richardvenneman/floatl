var webpackConfig = require('./webpack.config');

webpackConfig.output = {
  entry: './src/js/floatl.js',
  output: {
    library: 'floatl',
    libraryTarget: 'umd',
    filename: 'lib/js/floatl.js'
  }
};

// NOTE: plugins configuration has been ommitted since Karma loads karma-*
//  plugins by default
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
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
    reporters: ['nyan', 'notify'],
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

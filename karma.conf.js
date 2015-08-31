module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      { pattern: 'node_modules/jquery/dist/jquery.js', watched: false },
      { pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', watched: false },
      'lib/coffee/floatl.coffee',
      'test/floatlTest.coffee'
    ],
    preprocessors: {
      'lib/coffee/floatl.coffee': ['browserify'],
      'test/floatlTest.coffee': ['browserify']
    },
    reporters: ['progress', 'clear-screen', 'notify'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,

    // Browserify
    browserify: {
      debug: true,
      transform: ['coffeeify']
    }
  });
}

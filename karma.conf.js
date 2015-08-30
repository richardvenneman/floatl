module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'lib/**/*.coffee',
      'test/**/*Test.coffee'
    ],
    exclude: [],
    preprocessors: {
      'lib/**/*.coffee': ['browserify'],
      'test/*.coffee': ['coffee'],
    },
    browserify: {
      debug: true,
      transform: ['coffeeify']
    },
    reporters: ['progress', 'notify'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  })
}

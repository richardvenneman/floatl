process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function(config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],

    files: ["src/**/*.ts", "spec/**/*.ts"],

    preprocessors: {
      "src/**/*.ts": ["karma-typescript", "coverage"],
      "spec/**/*.ts": "karma-typescript"
    },

    reporters: ["progress", "coverage", "karma-typescript", "notify"],

    browsers: ["ChromeHeadless"],

    coverageReporter: {
      type: "lcov"
    }
  });
};

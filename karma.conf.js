process.env.CHROME_BIN = require("puppeteer").executablePath();

const sauceLabs = process.env.CI ? true : false;
const sauceLabsLaunchers = {
  sl_win_chrome: {
    base: "SauceLabs",
    browserName: "chrome",
    platform: "Windows 10"
  },
  sl_mac_chrome: {
    base: "SauceLabs",
    browserName: "chrome",
    platform: "macOS 10.12"
  },
  sl_firefox: {
    base: "SauceLabs",
    browserName: "firefox",
    platform: "Windows 10"
  },
  sl_mac_firfox: {
    base: "SauceLabs",
    browserName: "firefox",
    platform: "macOS 10.12"
  },
  sl_safari: {
    base: "SauceLabs",
    browserName: "safari",
    platform: "macOS 10.12"
  },
  sl_edge: {
    base: "SauceLabs",
    browserName: "MicrosoftEdge",
    platform: "Windows 10"
  },
  sl_ie_11: {
    base: "SauceLabs",
    browserName: "internet explorer",
    version: "11.103",
    platform: "Windows 10"
  },
  sl_ie_10: {
    base: "SauceLabs",
    browserName: "internet explorer",
    version: "10.0",
    platform: "Windows 7"
  },
  sl_ie_9: {
    base: "SauceLabs",
    browserName: "internet explorer",
    version: "9.0",
    platform: "Windows 7"
  },
  sl_ie_8: {
    base: "SauceLabs",
    browserName: "internet explorer",
    version: "8.0",
    platform: "Windows 7"
  },
  sl_ios_safari_9: {
    base: "SauceLabs",
    browserName: "iphone",
    version: "10.3"
  },
  "SL_ANDROID4.4": {
    base: "SauceLabs",
    browserName: "android",
    platform: "Linux",
    version: "4.4"
  },
  SL_ANDROID5: {
    base: "SauceLabs",
    browserName: "android",
    platform: "Linux",
    version: "5.1"
  },
  SL_ANDROID6: {
    base: "SauceLabs",
    browserName: "Chrome",
    platform: "Android",
    version: "6.0",
    device: "Android Emulator"
  }
};

module.exports = function(config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],

    files: ["src/**/*.ts", "spec/**/*.ts"],

    preprocessors: {
      "src/**/*.ts": ["karma-typescript", "coverage"],
      "spec/**/*.ts": "karma-typescript"
    },

    reporters: ["progress", "coverage", "karma-typescript", "notify"].concat(
      sauceLabs ? "saucelabs" : []
    ),

    customLaunchers: sauceLabs ? sauceLabsLaunchers : {},

    browsers: sauceLabs ? Object.keys(sauceLabsLaunchers) : ["ChromeHeadless"],

    coverageReporter: {
      type: "lcov",
      subdir: ".",
      file: "lcov.info"
    }
  });
};

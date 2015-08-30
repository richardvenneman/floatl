# Floatl

A library agnostic, pragmatic implementation of the [Float Label Pattern](http://mds.is/float-label-pattern/).

## Features

- Supports IE8+ (and modern browsers)
- CommonJS compatible
- Library agnostic (no jQuery dependency)
- Supports textfields and textareas
- Customizable CSS styling

## Usage

If you use a module bundler such as Browserify or Webpack, you can simply require the `floatl` package:

```javascript
var floatl = require('floatl')
```


## Usage with Rails

Since this project embraces Bower and is properly tagged, you can install use it in your Rails project with [rails-assets](https://www.rails-assets.org).

## Motivations

There are several libraries available which implement the Float Label Pattern, most notably [floatlabels.js](https://github.com/clubdesign/floatlabels.js) and [FloatLabel.js](https://github.com/m10l/FloatLabel.js). However, these libraries didn't quit fit the requisites I had in mind (see features above) and I didn't find any Bower compatible libraries when I started this project. Furthermore I'd like to use a well-maintained library. Since we're using this library in production at [Cityspotters](https://www.cityspotters.com) I'm keeping this library up to date.

## TODO

- Remove Bourbon dependency, utilise gulp-autoprefixer
- Auto bind elements with js-floatl class

## Development & testing

This project uses [Jasmine](http://jasmine.github.io) with the [Karma Test Runner](http://karma-runner.github.io/).

- Install dependencies with `npm install`
- Run Karma: `./node_modules/karma/bin/karma start`*
- Add tests in `test/floatlTest.coffee` and implementation in `lib/coffee/floatl.coffee`

As mentioned in the [Karma installation instructions](http://karma-runner.github.io/0.13/intro/installation.html) you can also install `karma-cli` globally with `npm install -g karma-cli`. After installation you can run Karma simply by typing `karma`.

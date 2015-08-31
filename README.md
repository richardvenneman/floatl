# Floatl

A library agnostic, pragmatic implementation of the [Float Label Pattern](http://mds.is/float-label-pattern/).

[![NPM](https://img.shields.io/npm/v/floatl.svg?style=flat-square)](https://www.npmjs.com/package/floatl)
![Bower](https://img.shields.io/bower/v/floatl.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/richardvenneman/floatl/master.svg?style=flat-square)](https://travis-ci.org/richardvenneman/floatl)

## Features

- Supports IE8+ (and modern browsers)
- CommonJS compatible
- Library agnostic (no jQuery dependency)
- Supports textfields and textareas
- Customizable plain CSS styling

## Usage

First make sure the script is loaded. If you use a module bundler such as Browserify or Webpack, you can simply require the `floatl` package, otherwise just include the script on your webpage.

Markup your `input` or `textarea` element with the floatl classes:

```html
<div class="floatl js-floatl">
  <label class="floatl__label">First name</label>
  <input class="floatl__input" placeholder="First name" type="text"></div>
</div>
```

Instantiate Floatl by passing in a DOM element:

```javascript
var element = document.querySelectorAll('js-floatl')[0];

// Module approach
var floatl = require('float');
new floatl(element);

// Regular approach with the global Floatl function
new Floatl(element);

// When using jQuery, pass in the actual DOM method
new Floatl($('.js-floatl').get(0))
```

### Usage with Rails

Since this project embraces Bower and is properly tagged, you can install use it in your Rails project with [rails-assets](https://www.rails-assets.org).

## Browser support

The CSS is [Autoprefixed](https://github.com/postcss/autoprefixer) with the following string: `"> 5%, ie >= 8"`. While the JavaScript supports IE8+, Floatl aims to be good at Floating Labels and only that. The Floating Labels Pattern works best with placeholders and it is therefor recommended to install legacy browser placeholder support should you need it, for example [Placekeeper](https://github.com/kristerkari/placekeeper) or [Placeholders.js](https://github.com/jamesallardice/Placeholders.js).

## Motivations

There are several libraries available which implement the Float Label Pattern, most notably [floatlabels.js](https://github.com/clubdesign/floatlabels.js) and [FloatLabel.js](https://github.com/m10l/FloatLabel.js). However, these libraries didn't quit fit the requisites I had in mind (see features above) and I didn't find any Bower compatible libraries when I started this project. Furthermore I'd like to use a well-maintained library. Since we're using this library in production at [Cityspotters](https://www.cityspotters.com) I'm keeping this library up to date.

## TODO

- Auto bind elements with js-floatl class

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- Report bugs
- Fix bugs and submit pull requests
- Write, clarify, or fix documentation
- Suggest or add new features
- Write missing tests

## Development & testing

This project uses [Jasmine](http://jasmine.github.io) with the [Karma Test Runner](http://karma-runner.github.io/).

- Install dependencies with `npm install`
- Run Karma: `./node_modules/karma/bin/karma start`*
- Add tests in `test/floatlTest.coffee` and implementation in `lib/coffee/floatl.coffee`

As mentioned in the [Karma installation instructions](http://karma-runner.github.io/0.13/intro/installation.html) you can also install `karma-cli` globally with `npm install -g karma-cli`. After installation you can run Karma simply by typing `karma`.

## License

This library is released under the [MIT License](http://www.opensource.org/licenses/MIT).

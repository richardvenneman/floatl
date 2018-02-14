# Floatl

A pragmatic implementation of the [Float Label Pattern](http://mds.is/float-label-pattern/).

[![NPM](https://img.shields.io/npm/v/floatl.svg)](https://www.npmjs.com/package/floatl)
[![Build Status](https://semaphoreci.com/api/v1/richardvenneman/floatl/branches/typescript/badge.svg)](https://semaphoreci.com/richardvenneman/floatl)
[![Maintainability](https://api.codeclimate.com/v1/badges/c68d489f62e4a80f0ae2/maintainability)](https://codeclimate.com/github/richardvenneman/floatl/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c68d489f62e4a80f0ae2/test_coverage)](https://codeclimate.com/github/richardvenneman/floatl/test_coverage)

![Floatl](https://i.imgur.com/fjDfAcE.gif)

Online example: https://richardvenneman.github.io/floatl/example

## Features

🤙 Supports textfields and textareas

🏝 Dependency-free and maintained

⚡️ Small size, < 1Kb gzipped

<details>
 <summary>🤣 Oldie browser support</summary>
 <a href="https://saucelabs.com/u/richardvenneman">
  <img src="https://saucelabs.com/browser-matrix/richardvenneman.svg" alt="Sauce Test Status"/>
 </a>

 _* Supports IE8 & IE9 as well, but I couldn't get them to run on SauceLabs_ 😰
</details>

## Installation

Floatl is built primarily for module bundlers such as [Browserify](http://browserify.org) and [webpack](http://webpack.github.io).
As such it is distributed via [NPM](https://www.npmjs.com/package/floatl).

```bash
yarn add floatl

# or

npm i -S floatl
```

### Styling

Add the required styling to your app. Please refer to the [GitHub wiki page](https://github.com/richardvenneman/floatl/wiki/Styling) on styling for more information.

## Using the global Floatl (classic browser environment)

If you're not using a module bundler, you can download the globally built UMD version from the [GitHub releases page](https://github.com/richardvenneman/floatl/releases) and include it in your app.
This adds `Floatl` to the global namespace.

## Usage

*NOTE: Check the [GitHub wiki page](https://github.com/richardvenneman/floatl/wiki) for instructions on how to use with React & Angular.*

Markup your `label` and `input` (or `textarea`) with the floatl classes and wrap them in an element with the `floatl` class:

```html
<div class="floatl">
  <label for="first_name" class="floatl__label">First name</label>
  <input name="first_name" class="floatl__input" placeholder="First name" type="text" />
</div>
```

Instantiate Floatl by passing in the wrapping DOM element:

```javascript
import Floatl from "floatl";

var element = document.getElementById("my-floatl-element");
new Floatl(element);
```

### Initializing multiple Floatls

Initializing all of the Floatl inputs on your page can be easily done like this:

```javascript
var elements = document.getElementsByClassName("floatl");

// In modern browsers
for (var element of elements) {
  new Floatl(element);
}

// In old browsers
Array.from(document.getElementsByClassName("floatl")).forEach(function(
  element
) {
  new floatl.Floatl(element);
});
```

## Placeholder polyfilling

While the JavaScript supports IE8+, Floatl aims to be good at Floating Labels and only that. The Floating Labels Pattern works best with placeholders and it is therefor recommended to install legacy browser placeholder support should you need it, for example [Placekeeper](https://github.com/kristerkari/placekeeper) or [Placeholders.js](https://github.com/jamesallardice/Placeholders.js).

## Motivations

There are several libraries available that implement the Float Label Pattern, most notably [floatlabels.js](https://github.com/clubdesign/floatlabels.js) and [FloatLabel.js](https://github.com/m10l/FloatLabel.js). However, these libraries did not quite fulfill the requisites I had in mind (see features above) and I did not find any Bower compatible libraries when I started this project. Furthermore I like to use a well-maintained library. Since we're using this library in production at [CitySpotters](https://www.cityspotters.com) I'm keeping this library up to date.

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

* Report bugs
* Fix bugs and submit pull requests
* Write, clarify, or fix documentation
* Suggest or add new features
* Write missing tests
* Improve the TypeScript implementation

## Development & testing

This project uses [Jasmine](http://jasmine.github.io) with the [Karma Test Runner](http://karma-runner.github.io/).

* Install dependencies with `yarn install`
* Run the test suite with: `yarn test` (or `yarn run tdd` for Test Driven Development)

## License

This library is released under the [MIT License](http://www.opensource.org/licenses/MIT).

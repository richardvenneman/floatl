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

🏝 Maintainable, no dependencies

⚡️ Small in size, < 1Kb gzipped

<details>
 <summary>🤣 Legacy browser support*</summary>
 <a href="https://saucelabs.com/u/richardvenneman">
  <img src="https://saucelabs.com/browser-matrix/richardvenneman.svg" alt="Sauce Test Status"/>
 </a> 
 
 _* Should work in IE8 & IE9 as well, but I couldn't get them to run on SauceLabs_ 😰
</details>

## Installation

Floatl is built primarily for module bundlers such as [Browserify](http://browserify.org) and [webpack](http://webpack.github.io).
As such it is distributed via [NPM](https://www.npmjs.com/package/floatl).

```bash
yarn add floatl --save

# or

npm i floatl
```

### Using the global Floatl (classic browser environment)

If you're not using a module bundler, you can download the globally built UMD version from the [GitHub releases page](https://github.com/richardvenneman/floatl/releases) and include it in your app.
This adds Floatl to the global namespace.

## Usage

First make sure the script is loaded. If you use a module bundler, you can simply import/require the `floatl` package, otherwise include the script on your webpage.

Markup your `label` and `input` (or `textarea`) with the floatl classes and wrap them in an element with the `floatl` class:

```html
<div class="floatl">
  <label for="first_name" class="floatl__label">First name</label>
  <input name="first_name" class="floatl__input" placeholder="First name" type="text" />
</div>
```

Instantiate Floatl by passing in a DOM element:

```javascript
var element = document.getElementById("my-floatl-element");

// Module approach
import { Floatl } from "floatl";
const floatl = new Floatl(element);

// When using the global Floatl
new Floatl(element);
```

### Usage with AngularJS

After including the float.js, you can define and use the directive below:

```javascript
.directive('ngFloatl', function () {
  return {
    link: function (scope, elem, attrs, ctrl)  {
      var wrapper = elem[0];
      var label = wrapper.querySelector('label');
      var input = wrapper.querySelector('input');

      angular.element(elem).addClass('floatl');
      angular.element(label).addClass('floatl__label');
      angular.element(input).addClass('floatl__input');

      new Floatl(wrapper);
    }
  }
})
```

```html
<div ng-floatl>
  <label for="first_name">First name</label>
  <input name="first_name" type="text" placeholder="First name" />
</div>
```

### Usage with React

You can use the `componentDidMount` lifecycle hook in your components:

```javascript
import React, { Component } from "react";
import Floatl from "floatl";

class MyComponent extends Component {
  componentDidMount() {
    const floatl = new Floatl(this.floatlElement);
  }

  render() {
    return (
      <div
        className="floatl"
        ref={el => {
          this.floatlElement = el;
        }}
      >
        <label for="first_name" className="floatl__label">
          First name
        </label>
        <input
          name="first_name"
          type="text"
          className="floatl__input"
          placeholder="First name"
        />
      </div>
    );
  }
}

export default MyComponent;
```

### CSS styling

All functionality and styling is basically achieved by toggling CSS classes. Because of this it is easy to apply your own styling. Check out this [Gist with example styling](https://gist.github.com/richardvenneman/cf64188aa645208c65c8) to get an idea.

## Browser support

While the JavaScript supports IE8+, Floatl aims to be good at Floating Labels and only that. The Floating Labels Pattern works best with placeholders and it is therefor recommended to install legacy browser placeholder support should you need it, for example [Placekeeper](https://github.com/kristerkari/placekeeper) or [Placeholders.js](https://github.com/jamesallardice/Placeholders.js).

## Motivations

There are several libraries available that implement the Float Label Pattern, most notably [floatlabels.js](https://github.com/clubdesign/floatlabels.js) and [FloatLabel.js](https://github.com/m10l/FloatLabel.js). However, these libraries did not quite fulfill the requisites I had in mind (see features above) and I did not find any Bower compatible libraries when I started this project. Furthermore I like to use a well-maintained library. Since we're using this library in production at [Cityspotters](https://www.cityspotters.com) I'm keeping this library up to date.

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

* Report bugs
* Fix bugs and submit pull requests
* Write, clarify, or fix documentation
* Suggest or add new features
* Write missing tests

## Development & testing

This project uses [Jasmine](http://jasmine.github.io) with the [Karma Test Runner](http://karma-runner.github.io/).

* Install dependencies with `yarn install`
* Run the test suite with: `yarn test` (or `yarn run tdd` for Test Driven Development)

## License

This library is released under the [MIT License](http://www.opensource.org/licenses/MIT).

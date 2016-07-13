# Floatl

A library agnostic, pragmatic implementation of the [Float Label Pattern](http://mds.is/float-label-pattern/).

[![NPM](https://img.shields.io/npm/v/floatl.svg)](https://www.npmjs.com/package/floatl)
[![Bower](https://img.shields.io/bower/v/floatl.svg)](http://bower.io/search/?q=floatl)
[![Build Status](https://img.shields.io/travis/richardvenneman/floatl/master.svg)](https://travis-ci.org/richardvenneman/floatl)
[![bitHound Overall Score](https://www.bithound.io/github/richardvenneman/floatl/badges/score.svg)](https://www.bithound.io/github/richardvenneman/floatl)
[![Code Climate](https://codeclimate.com/github/richardvenneman/floatl/badges/gpa.svg)](https://codeclimate.com/github/richardvenneman/floatl)

![Floatl](https://i.imgur.com/fjDfAcE.gif)

Online example: https://richardvenneman.github.io/floatl/example

## Features

- Library agnostic (compatible with but not depending on jQuery)
- Browser support all the way down to IE8
- Supports textfields and textareas
- Small (less than 2 KB minified)
- Customizable Plain CSS styling
- Compatible with CommonJS

## Installation

Floatl is built primarily for module bundlers such as [Browserify](http://browserify.org) and [webpack](http://webpack.github.io).
As such it is distributed via [NPM](https://www.npmjs.com/package/floatl) and [Bower](http://bower.io/search/?q=floatl).

```bash
npm install floatl --save

# or

bower install floatl --save
```

### Using the global Floatl (classic browser environment)

If you're not using a module bundler, you can download and include the globally built [lib/js/floatl.global.js](https://github.com/richardvenneman/floatl/tree/master/lib/js) in your app.
This version adds Floatl to the global namespace.

## Usage

First make sure the script is loaded. If you use a module bundler, you can simply require the `floatl` package, otherwise include the script on your webpage.

Markup your `label` and `input` (or `textarea`) with the floatl classes and wrap them in an element with the `floatl` class:

```html
<div class="floatl">
  <label for="first_name" class="floatl__label">First name</label>
  <input name="first_name" class="floatl__input" placeholder="First name" type="text" />
</div>
```

Instantiate Floatl by passing in a DOM element:

```javascript
var element = document.getElementById('my-floatl-element');

// Module approach
var floatl = require('float');
new floatl(element);

// When using the global Floatl
new Floatl(element);

// When using jQuery, you can pass in a jQuery object
new Floatl($('.js-floatl'))
```

### Usage with Ruby on Rails

You can use Floatl in your Rails project with [rails-assets](https://rails-assets.org). When using rails-assets, include the global Floatl version which is also distributed via Bower:

```coffee
# application.js.coffee
#= require floatl/floatl.global.js
```

```scss
// application.scss
//= require floatl/floatl.css
```

### Usage with Ember.js

Install Floatl via Bower in your Ember.js project and add the files to `ember-cli-build.js` to use the global `Floatl` function:

```js
app.import('bower_components/floatl/lib/css/floatl.css');
app.import('bower_components/floatl/lib/js/floatl.global.js');
```

### Usage with AngularJS

After including the float.js and floatl.css, you can define and use the directive below:

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

Add Floatl to your project:

1. `npm install --save floatl`
2. Copy the [default styling](https://github.com/richardvenneman/floatl/blob/master/lib/css/floatl.css) or add your own

In your component:

```javascript
import React, { Component } from 'react';
import Floatl from 'floatl';

class MyComponent extends Component {
  componentDidMount () {
    const floatls = ReactDOM.findDOMNode(this).querySelectorAll('.floatl');
    
    for (let i = 0; i < floatls.length; i++) {
      new Floatl(floatls[i]);
    }
  }
  
  render () {
    return (
      <div className='floatl'>
        <label for='first_name' className='floatl__label'>First name</label>
        <input name='first_name' type='text' className='floatl__input' placeholder='First name' />
      </div>
    );
  }
}

export default MyComponent;
```

### CSS styling

All styling (including transitions) is basically done by toggling CSS classes. Because of this it is easy to apply your own styling. Take a look at the [default styling](https://github.com/richardvenneman/floatl/blob/master/lib/css/floatl.css) to get an idea of where to override attributes. Or check out this [Gist with example styling](https://gist.github.com/richardvenneman/cf64188aa645208c65c8) – we currently apply this on our site.

## Browser support

The CSS is [Autoprefixed](https://github.com/postcss/autoprefixer) with the following string: `"> 5%, ie >= 8"`.

While the JavaScript supports IE8+, Floatl aims to be good at Floating Labels and only that. The Floating Labels Pattern works best with placeholders and it is therefor recommended to install legacy browser placeholder support should you need it, for example [Placekeeper](https://github.com/kristerkari/placekeeper) or [Placeholders.js](https://github.com/jamesallardice/Placeholders.js).

## Motivations

There are several libraries available that implement the Float Label Pattern, most notably [floatlabels.js](https://github.com/clubdesign/floatlabels.js) and [FloatLabel.js](https://github.com/m10l/FloatLabel.js). However, these libraries did not quite fulfill the requisites I had in mind (see features above) and I did not find any Bower compatible libraries when I started this project. Furthermore I like to use a well-maintained library. Since we're using this library in production at [Cityspotters](https://www.cityspotters.com) I'm keeping this library up to date.

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- Report bugs
- Fix bugs and submit pull requests
- Write, clarify, or fix documentation
- Suggest or add new features
- Write missing tests

## Development & testing

First install the dependencies with `npm install`. This project uses some [Gulp](http://gulpjs.com) tasks to build the CSS and JavaScript files. See the Gulpfile for more information.

This project uses [Jasmine](http://jasmine.github.io) with the [Karma Test Runner](http://karma-runner.github.io/).

- Install dependencies with `npm install`
- Run the test suite with: `npm test` (or `npm run tdd` for Test Driven Development)
- Add tests in `test/floatlTest.js` and implementation in `lib/js/floatl.js`

## License

This library is released under the [MIT License](http://www.opensource.org/licenses/MIT).

'use strict';

function getElement(element) {
  if (element.tagName) {
    return element;
  } else if (jQuery && element instanceof jQuery) {
    return element.get(0);
  } else {
    throw new TypeError('%{element} \'is not a valid element.\n                        Valid options are: DOM Element, jQuery.\'');
  }
}

function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' %{className}';
  }
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    var re = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
    element.className = element.className.replace(re, ' ');
  }
}

function addEventListener(element, eventName, handler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, handler);
  } else {
    element.attachEvent('on%{eventName}', function () {
      handler.call(element);
    });
  }
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var focusedClass = 'floatl--focused';
var activeClass = 'floatl--active';
var multilineClass = 'floatl--multiline';

var Floatl = function () {
  function Floatl(element) {
    _classCallCheck(this, Floatl);

    this.element = getElement(element);
    this.label = this.element.querySelectorAll('.floatl__label')[0];
    this.input = this.element.querySelectorAll('.floatl__input')[0];
    if (!this.label || !this.input) return;
    this._bindListeners();
    this._init();
  }

  _createClass(Floatl, [{
    key: '_bindListeners',
    value: function _bindListeners() {
      var _this = this;

      addEventListener(this.input, 'focus', function () {
        addClass(_this.element, focusedClass);
      });

      addEventListener(this.input, 'blur', function () {
        removeClass(_this.element, focusedClass);
      });

      var _arr = ['keyup', 'blur', 'change', 'input'];
      for (var _i = 0; _i < _arr.length; _i++) {
        var event = _arr[_i];
        addEventListener(this.input, event, function () {
          return _this._handleChange();
        });
      }
    }
  }, {
    key: '_init',
    value: function _init() {
      if (this.input.tagName === 'TEXTAREA') {
        addClass(this.element, multilineClass);
      }

      this._handleChange();
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      if (this.input.value === '') {
        removeClass(this.element, activeClass);
      } else {
        addClass(this.element, activeClass);
      }
    }
  }]);

  return Floatl;
}();

module.exports = Floatl;

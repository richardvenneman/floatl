(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Floatl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Floatl,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = Floatl = (function() {
  var ACTIVE_CLASS, FOCUSED_CLASS;

  FOCUSED_CLASS = 'floatl--focused';

  ACTIVE_CLASS = 'floatl--active';

  function Floatl(element) {
    this.handleChange = bind(this.handleChange, this);
    var event, i, len, ref;
    this.element = element;
    this.label = this.element.querySelectorAll('.floatl__label')[0];
    this.input = this.element.querySelectorAll('.floatl__input')[0];
    this.addEventListener(this.input, 'focus', (function(_this) {
      return function() {
        return _this.addClass(_this.element, FOCUSED_CLASS);
      };
    })(this));
    this.addEventListener(this.input, 'blur', (function(_this) {
      return function() {
        return _this.removeClass(_this.element, FOCUSED_CLASS);
      };
    })(this));
    ref = ['keyup', 'blur', 'change'];
    for (i = 0, len = ref.length; i < len; i++) {
      event = ref[i];
      this.addEventListener(this.input, event, this.handleChange);
    }
  }

  Floatl.prototype.handleChange = function(event) {
    if (this.input.value === '') {
      return this.removeClass(this.element, ACTIVE_CLASS);
    } else {
      return this.addClass(this.element, ACTIVE_CLASS);
    }
  };

  Floatl.prototype.addClass = function(el, className) {
    if (el.classList) {
      return el.classList.add(className);
    } else {
      return el.className += " " + className;
    }
  };

  Floatl.prototype.removeClass = function(el, className) {
    var re;
    if (el.classList) {
      return el.classList.remove(className);
    } else {
      re = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
      return el.className = el.className.replace(re, ' ');
    }
  };

  Floatl.prototype.addEventListener = function(el, eventName, handler) {
    if (el.addEventListener) {
      return el.addEventListener(eventName, handler);
    } else {
      return el.attachEvent("on" + eventName, function() {
        return handler.call(el);
      });
    }
  };

  return Floatl;

})();


},{}]},{},[1])(1)
});
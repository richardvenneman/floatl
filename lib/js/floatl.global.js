var Floatl =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _floatl = __webpack_require__(1);
	
	var _floatl2 = _interopRequireDefault(_floatl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _floatl2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var focusedClass = 'floatl--focused';
	var activeClass = 'floatl--active';
	var multilineClass = 'floatl--multiline';
	
	var Floatl = function () {
	  function Floatl(element) {
	    _classCallCheck(this, Floatl);
	
	    this.element = (0, _utils.getElement)(element);
	    this.label = this.element.querySelectorAll('.floatl__label')[0];
	    this.input = this.element.querySelectorAll('.floatl__input')[0];
	
	    this._bindListeners();
	    this._init();
	  }
	
	  _createClass(Floatl, [{
	    key: '_bindListeners',
	    value: function _bindListeners() {
	      var _this = this;
	
	      (0, _utils.addEventListener)(this.input, 'focus', function () {
	        (0, _utils.addClass)(_this.element, focusedClass);
	      });
	
	      (0, _utils.addEventListener)(this.input, 'blur', function () {
	        (0, _utils.removeClass)(_this.element, focusedClass);
	      });
	
	      var _arr = ['keyup', 'blur', 'change'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var event = _arr[_i];
	        (0, _utils.addEventListener)(this.input, event, function () {
	          return _this._handleChange();
	        });
	      }
	    }
	  }, {
	    key: '_init',
	    value: function _init() {
	      if (this.input.tagName === 'TEXTAREA') {
	        (0, _utils.addClass)(this.element, multilineClass);
	      }
	
	      this._handleChange();
	    }
	  }, {
	    key: '_handleChange',
	    value: function _handleChange() {
	      if (this.input.value === '') {
	        (0, _utils.removeClass)(this.element, activeClass);
	      } else {
	        (0, _utils.addClass)(this.element, activeClass);
	      }
	    }
	  }]);
	
	  return Floatl;
	}();
	
	exports.default = Floatl;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getElement = getElement;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.addEventListener = addEventListener;
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjAxNzNlMzAzODg2NTc4N2MwOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mbG9hdGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJmb2N1c2VkQ2xhc3MiLCJhY3RpdmVDbGFzcyIsIm11bHRpbGluZUNsYXNzIiwiRmxvYXRsIiwiZWxlbWVudCIsImxhYmVsIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0IiwiX2JpbmRMaXN0ZW5lcnMiLCJfaW5pdCIsImV2ZW50IiwiX2hhbmRsZUNoYW5nZSIsInRhZ05hbWUiLCJ2YWx1ZSIsImdldEVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsImdldCIsIlR5cGVFcnJvciIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwicmVwbGFjZSIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImNhbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQUEsUUFBT0MsT0FBUCxvQjs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7OztBQUVBLEtBQU1DLGVBQWUsaUJBQXJCO0FBQ0EsS0FBTUMsY0FBYyxnQkFBcEI7QUFDQSxLQUFNQyxpQkFBaUIsbUJBQXZCOztLQUVxQkMsTTtBQUNuQixtQkFBWUMsT0FB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M0IsUUFBUWEsZ0JBQVosRUFBOEI7QUFDNUJiLGFBQVFhLGdCQUFSLENBQXlCYSxTQUF6QixFQUFvQ0MsT0FBcEM7QUFDRCxJQUZELE1BRU87QUFDTDNCLGFBQVE0QixXQUFSLG1CQUFzQyxZQUFXO0FBQy9DRCxlQUFRRSxJQUFSLENBQWE3QixPQUFiO0FBQ0QsTUFGRDtBQUdEO0FBQ0YsRSIsImZpbGUiOiJmbG9hdGwuZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyMDE3M2UzMDM4ODY1Nzg3YzA5ZFxuICoqLyIsImltcG9ydCBGbG9hdGwgZnJvbSAnLi9mbG9hdGwnXG5cbm1vZHVsZS5leHBvcnRzID0gRmxvYXRsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgeyBnZXRFbGVtZW50LCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIGFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZm9jdXNlZENsYXNzID0gJ2Zsb2F0bC0tZm9jdXNlZCc7XG5jb25zdCBhY3RpdmVDbGFzcyA9ICdmbG9hdGwtLWFjdGl2ZSc7XG5jb25zdCBtdWx0aWxpbmVDbGFzcyA9ICdmbG9hdGwtLW11bHRpbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0bCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb2F0bF9fbGFiZWwnKVswXTtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9hdGxfX2lucHV0JylbMF07XG5cbiAgICB0aGlzLl9iaW5kTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgX2JpbmRMaXN0ZW5lcnMoKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIGZvY3VzZWRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsICdibHVyJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCBmb2N1c2VkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgZXZlbnQgb2YgWydrZXl1cCcsICdibHVyJywgJ2NoYW5nZSddKSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsIGV2ZW50LCAoKSA9PiB0aGlzLl9oYW5kbGVDaGFuZ2UoKSk7XG4gICAgfVxuICB9XG5cbiAgX2luaXQoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBtdWx0aWxpbmVDbGFzcyk7XG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlQ2hhbmdlKCk7XG4gIH1cblxuICBfaGFuZGxlQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgYWN0aXZlQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvZmxvYXRsLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50YWdOYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAoalF1ZXJ5ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXQoMCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJXtlbGVtZW50fSAnaXMgbm90IGEgdmFsaWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkIG9wdGlvbnMgYXJlOiBET00gRWxlbWVudCwgalF1ZXJ5LidgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJXtjbGFzc05hbWV9YDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICcgJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmF0dGFjaEV2ZW50KGBvbiV7ZXZlbnROYW1lfWAsIGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlci5jYWxsKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy91dGlscy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
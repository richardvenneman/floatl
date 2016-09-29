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
	    if (this.label && this.input) {
	      this._bindListeners();
	      this._init();
	    }
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
	    re = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTg5YjU2ZTAzZTFlMmE3YjEwY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mbG9hdGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJmb2N1c2VkQ2xhc3MiLCJhY3RpdmVDbGFzcyIsIm11bHRpbGluZUNsYXNzIiwiRmxvYXRsIiwiZWxlbWVudCIsImxhYmVsIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0IiwiX2JpbmRMaXN0ZW5lcnMiLCJfaW5pdCIsImV2ZW50IiwiX2hhbmRsZUNoYW5nZSIsInRhZ05hbWUiLCJ2YWx1ZSIsImdldEVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsImdldCIsIlR5cGVFcnJvciIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwicmVwbGFjZSIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImNhbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQUEsUUFBT0MsT0FBUCxvQjs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7OztBQUVBLEtBQU1DLGVBQWUsaUJBQXJCO0FBQ0EsS0FBTUMsY0FBYyxnQkFBcEI7QUFDQSxLQUFNQyxpQkFBaUIsbUJBQXZCOztLQUVxQkMsTTtBQUNuQixtQkFBWUMsT0FB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LEVBQW1DMEIsU0FBbkMsRUFBOENDLE9BQTlDLEVBQXVEO0FBQzVELE9BQUkzQixRQUFRYSxnQkFBWixFQUE4QjtBQUM1QmIsYUFBUWEsZ0JBQVIsQ0FBeUJhLFNBQXpCLEVBQW9DQyxPQUFwQztBQUNELElBRkQsTUFFTztBQUNMM0IsYUFBUTRCLFdBQVIsbUJBQXNDLFlBQVc7QUFDL0NELGVBQVFFLElBQVIsQ0FBYTdCLE9BQWI7QUFDRCxNQUZEO0FBR0Q7QUFDRixFIiwiZmlsZSI6ImZsb2F0bC5nbG9iYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGU4OWI1NmUwM2UxZTJhN2IxMGNmXG4gKiovIiwiaW1wb3J0IEZsb2F0bCBmcm9tICcuL2Zsb2F0bCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvYXRsO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9pbmRleC5qc1xuICoqLyIsImltcG9ydCB7IGdldEVsZW1lbnQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgYWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3QgZm9jdXNlZENsYXNzID0gJ2Zsb2F0bC0tZm9jdXNlZCc7XHJcbmNvbnN0IGFjdGl2ZUNsYXNzID0gJ2Zsb2F0bC0tYWN0aXZlJztcclxuY29uc3QgbXVsdGlsaW5lQ2xhc3MgPSAnZmxvYXRsLS1tdWx0aWxpbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRsIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRsX19sYWJlbCcpWzBdO1xyXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRsX19pbnB1dCcpWzBdO1xyXG4gICAgaWYgKHRoaXMubGFiZWwgJiYgdGhpcy5pbnB1dCkge1xyXG4gICAgICAgIHRoaXMuX2JpbmRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYmluZExpc3RlbmVycygpIHtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2ZvY3VzJywgKCkgPT4ge1xyXG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIGZvY3VzZWRDbGFzcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsICdibHVyJywgKCkgPT4ge1xyXG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGZvY3VzZWRDbGFzcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKHZhciBldmVudCBvZiBbJ2tleXVwJywgJ2JsdXInLCAnY2hhbmdlJ10pIHtcclxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCBldmVudCwgKCkgPT4gdGhpcy5faGFuZGxlQ2hhbmdlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XHJcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgbXVsdGlsaW5lQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2hhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUNoYW5nZSgpIHtcclxuICAgIGlmICh0aGlzLmlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGFjdGl2ZUNsYXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgYWN0aXZlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9mbG9hdGwuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudChlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQudGFnTmFtZSkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfSBlbHNlIGlmIChqUXVlcnkgJiYgZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0KDApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAle2VsZW1lbnR9ICdpcyBub3QgYSB2YWxpZCBlbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWYWxpZCBvcHRpb25zIGFyZTogRE9NIEVsZW1lbnQsIGpRdWVyeS4nYCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAle2NsYXNzTmFtZX1gO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyAnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtZW50LmF0dGFjaEV2ZW50KGBvbiV7ZXZlbnROYW1lfWAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvdXRpbHMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
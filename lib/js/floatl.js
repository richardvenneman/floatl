module.exports =
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
	    if (!this.label || !this.input) return;
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
	
	      var _arr = ['keyup', 'blur', 'change', 'input'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmViMjdkZDlkYjFhNDA4YTk4NjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mbG9hdGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJmb2N1c2VkQ2xhc3MiLCJhY3RpdmVDbGFzcyIsIm11bHRpbGluZUNsYXNzIiwiRmxvYXRsIiwiZWxlbWVudCIsImxhYmVsIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0IiwiX2JpbmRMaXN0ZW5lcnMiLCJfaW5pdCIsImV2ZW50IiwiX2hhbmRsZUNoYW5nZSIsInRhZ05hbWUiLCJ2YWx1ZSIsImdldEVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsImdldCIsIlR5cGVFcnJvciIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwicmVwbGFjZSIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImNhbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQUEsUUFBT0MsT0FBUCxvQjs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7OztBQUVBLEtBQU1DLGVBQWUsaUJBQXJCO0FBQ0EsS0FBTUMsY0FBYyxnQkFBcEI7QUFDQSxLQUFNQyxpQkFBaUIsbUJBQXZCOztLQUVxQkMsTTtBQUNuQixtQkFBWUMsT0FB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QVNSLGdCQUFULENBQTBCYixPQUExQixFQUFtQzBCLFNBQW5DLEVBQThDQyxPQUE5QyxFQUF1RDtBQUM1RCxPQUFJM0IsUUFBUWEsZ0JBQVosRUFBOEI7QUFDNUJiLGFBQVFhLGdCQUFSLENBQXlCYSxTQUF6QixFQUFvQ0MsT0FBcEM7QUFDRCxJQUZELE1BRU87QUFDTDNCLGFBQVE0QixXQUFSLG1CQUFzQyxZQUFXO0FBQy9DRCxlQUFRRSxJQUFSLENBQWE3QixPQUFiO0FBQ0QsTUFGRDtBQUdEO0FBQ0YsRSIsImZpbGUiOiJmbG9hdGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZWIyN2RkOWRiMWE0MDhhOTg2NCIsImltcG9ydCBGbG9hdGwgZnJvbSAnLi9mbG9hdGwnXG5cbm1vZHVsZS5leHBvcnRzID0gRmxvYXRsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiaW1wb3J0IHsgZ2V0RWxlbWVudCwgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBhZGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGZvY3VzZWRDbGFzcyA9ICdmbG9hdGwtLWZvY3VzZWQnO1xuY29uc3QgYWN0aXZlQ2xhc3MgPSAnZmxvYXRsLS1hY3RpdmUnO1xuY29uc3QgbXVsdGlsaW5lQ2xhc3MgPSAnZmxvYXRsLS1tdWx0aWxpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KTtcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9hdGxfX2xhYmVsJylbMF07XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRsX19pbnB1dCcpWzBdO1xuICAgIGlmICghdGhpcy5sYWJlbCB8fCAhdGhpcy5pbnB1dCkgcmV0dXJuO1xuICAgIHRoaXMuX2JpbmRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBfYmluZExpc3RlbmVycygpIHtcbiAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcbiAgICB9KTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGZvY3VzZWRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBldmVudCBvZiBbJ2tleXVwJywgJ2JsdXInLCAnY2hhbmdlJywgJ2lucHV0J10pIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgZXZlbnQsICgpID0+IHRoaXMuX2hhbmRsZUNoYW5nZSgpKTtcbiAgICB9XG4gIH1cblxuICBfaW5pdCgpIHtcbiAgICBpZiAodGhpcy5pbnB1dC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIG11bHRpbGluZUNsYXNzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVDaGFuZ2UoKTtcbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvZmxvYXRsLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50YWdOYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAoalF1ZXJ5ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXQoMCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJXtlbGVtZW50fSAnaXMgbm90IGEgdmFsaWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkIG9wdGlvbnMgYXJlOiBET00gRWxlbWVudCwgalF1ZXJ5LidgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJXtjbGFzc05hbWV9YDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICcgJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmF0dGFjaEV2ZW50KGBvbiV7ZXZlbnROYW1lfWAsIGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlci5jYWxsKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9
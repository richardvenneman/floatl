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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmQwY2U2OTcxMDc0NzdkZjI4NDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mbG9hdGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJmb2N1c2VkQ2xhc3MiLCJhY3RpdmVDbGFzcyIsIm11bHRpbGluZUNsYXNzIiwiRmxvYXRsIiwiZWxlbWVudCIsImxhYmVsIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0IiwiX2JpbmRMaXN0ZW5lcnMiLCJfaW5pdCIsImV2ZW50IiwiX2hhbmRsZUNoYW5nZSIsInRhZ05hbWUiLCJ2YWx1ZSIsImdldEVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsImdldCIsIlR5cGVFcnJvciIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwicmVwbGFjZSIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImNhbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQUEsUUFBT0MsT0FBUCxvQjs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7OztBQUVBLEtBQU1DLGVBQWUsaUJBQXJCO0FBQ0EsS0FBTUMsY0FBYyxnQkFBcEI7QUFDQSxLQUFNQyxpQkFBaUIsbUJBQXZCOztLQUVxQkMsTTtBQUNuQixtQkFBWUMsT0FB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LEVBQW1DMEIsU0FBbkMsRUFBOENDLE9BQTlDLEVBQXVEO0FBQzVELE9BQUkzQixRQUFRYSxnQkFBWixFQUE4QjtBQUM1QmIsYUFBUWEsZ0JBQVIsQ0FBeUJhLFNBQXpCLEVBQW9DQyxPQUFwQztBQUNELElBRkQsTUFFTztBQUNMM0IsYUFBUTRCLFdBQVIsbUJBQXNDLFlBQVc7QUFDL0NELGVBQVFFLElBQVIsQ0FBYTdCLE9BQWI7QUFDRCxNQUZEO0FBR0Q7QUFDRixFIiwiZmlsZSI6ImZsb2F0bC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZmQwY2U2OTcxMDc0NzdkZjI4NDJcbiAqKi8iLCJpbXBvcnQgRmxvYXRsIGZyb20gJy4vZmxvYXRsJ1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9hdGw7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IHsgZ2V0RWxlbWVudCwgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBhZGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5jb25zdCBmb2N1c2VkQ2xhc3MgPSAnZmxvYXRsLS1mb2N1c2VkJztcclxuY29uc3QgYWN0aXZlQ2xhc3MgPSAnZmxvYXRsLS1hY3RpdmUnO1xyXG5jb25zdCBtdWx0aWxpbmVDbGFzcyA9ICdmbG9hdGwtLW11bHRpbGluZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGwge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9hdGxfX2xhYmVsJylbMF07XHJcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9hdGxfX2lucHV0JylbMF07XHJcbiAgICBpZiAodGhpcy5sYWJlbCAmJiB0aGlzLmlucHV0KSB7XHJcbiAgICAgICAgdGhpcy5fYmluZExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9iaW5kTGlzdGVuZXJzKCkge1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XHJcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAodmFyIGV2ZW50IG9mIFsna2V5dXAnLCAnYmx1cicsICdjaGFuZ2UnXSkge1xyXG4gICAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsIGV2ZW50LCAoKSA9PiB0aGlzLl9oYW5kbGVDaGFuZ2UoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmlucHV0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcclxuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBtdWx0aWxpbmVDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5faGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgYWN0aXZlQ2xhc3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBhY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Zsb2F0bC5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KGVsZW1lbnQpIHtcclxuICBpZiAoZWxlbWVudC50YWdOYW1lKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9IGVsc2UgaWYgKGpRdWVyeSAmJiBlbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5nZXQoMCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCV7ZWxlbWVudH0gJ2lzIG5vdCBhIHZhbGlkIGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkIG9wdGlvbnMgYXJlOiBET00gRWxlbWVudCwgalF1ZXJ5LidgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICV7Y2xhc3NOYW1lfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnICcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJXtldmVudE5hbWV9YCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGhhbmRsZXIuY2FsbChlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy91dGlscy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
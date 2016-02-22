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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhhNjJiNWFmN2RjMzUzZGQxZDgiLCJ3ZWJwYWNrOi8vLy4vbGliL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9qcy9mbG9hdGwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcENBLFFBQU8sT0FBUCxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsS0FBTSxlQUFlLGlCQUFmO0FBQ04sS0FBTSxjQUFjLGdCQUFkO0FBQ04sS0FBTSxpQkFBaUIsbUJBQWpCOztLQUVlO0FBQ25CLFlBRG1CLE1BQ25CLENBQVksT0FBWixFQUFxQjsyQkFERixRQUNFOztBQUNuQixVQUFLLE9BQUwsR0FBZSx1QkFBVyxPQUFYLENBQWYsQ0FEbUI7QUFFbkIsVUFBSyxLQUFMLEdBQWEsS0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBOEIsZ0JBQTlCLEVBQWdELENBQWhELENBQWIsQ0FGbUI7QUFHbkIsVUFBSyxLQUFMLEdBQWEsS0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBOEIsZ0JBQTlCLEVBQWdELENBQWhELENBQWIsQ0FIbUI7O0FBS25CLFVBQUssY0FBTCxHQUxtQjtBQU1uQixVQUFLLEtBQUwsR0FObUI7SUFBckI7O2dCQURtQjs7c0NBVUY7OztBQUNmLG9DQUFpQixLQUFLLEtBQUwsRUFBWSxPQUE3QixFQUFzQyxZQUFNO0FBQzFDLDhCQUFTLE1BQUssT0FBTCxFQUFjLFlBQXZCLEVBRDBDO1FBQU4sQ0FBdEMsQ0FEZTs7QUFLZixvQ0FBaUIsS0FBSyxLQUFMLEVBQVksTUFBN0IsRUFBcUMsWUFBTTtBQUN6QyxpQ0FBWSxNQUFLLE9BQUwsRUFBYyxZQUExQixFQUR5QztRQUFOLENBQXJDLENBTGU7O2tCQVNHLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsUUFBbEIsRUFUSDtBQVNmLGdEQUErQztBQUExQyxhQUFJLGdCQUFKLENBQTBDO0FBQzdDLHNDQUFpQixLQUFLLEtBQUwsRUFBWSxLQUE3QixFQUFvQztrQkFBTSxNQUFLLGFBQUw7VUFBTixDQUFwQyxDQUQ2QztRQUEvQzs7Ozs2QkFLTTtBQUNOLFdBQUksS0FBSyxLQUFMLENBQVcsT0FBWCxLQUF1QixVQUF2QixFQUFtQztBQUNyQyw4QkFBUyxLQUFLLE9BQUwsRUFBYyxjQUF2QixFQURxQztRQUF2Qzs7QUFJQSxZQUFLLGFBQUwsR0FMTTs7OztxQ0FRUTtBQUNkLFdBQUksS0FBSyxLQUFMLENBQVcsS0FBWCxLQUFxQixFQUFyQixFQUF5QjtBQUMzQixpQ0FBWSxLQUFLLE9BQUwsRUFBYyxXQUExQixFQUQyQjtRQUE3QixNQUVPO0FBQ0wsOEJBQVMsS0FBSyxPQUFMLEVBQWMsV0FBdkIsRUFESztRQUZQOzs7O1VBakNpQjs7Ozs7Ozs7Ozs7Ozs7U0NOTDtTQVdBO1NBUUE7U0FTQTtBQTVCVCxVQUFTLFVBQVQsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDbEMsT0FBSSxRQUFRLE9BQVIsRUFBaUI7QUFDbkIsWUFBTyxPQUFQLENBRG1CO0lBQXJCLE1BRU8sSUFBSSxVQUFVLG1CQUFtQixNQUFuQixFQUEyQjtBQUM5QyxZQUFPLFFBQVEsR0FBUixDQUFZLENBQVosQ0FBUCxDQUQ4QztJQUF6QyxNQUVBO0FBQ0wsV0FBTSxJQUFJLFNBQUosMkdBQU4sQ0FESztJQUZBO0VBSEY7O0FBV0EsVUFBUyxRQUFULENBQWtCLE9BQWxCLEVBQTJCLFNBQTNCLEVBQXNDO0FBQzNDLE9BQUksUUFBUSxTQUFSLEVBQW1CO0FBQ3JCLGFBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixTQUF0QixFQURxQjtJQUF2QixNQUVPO0FBQ0wsYUFBUSxTQUFSLG9CQURLO0lBRlA7RUFESzs7QUFRQSxVQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEIsU0FBOUIsRUFBeUM7QUFDOUMsT0FBSSxRQUFRLFNBQVIsRUFBbUI7QUFDckIsYUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFNBQXpCLEVBRHFCO0lBQXZCLE1BRU87QUFDTCxVQUFLLElBQUksTUFBSixDQUFXLFlBQVksVUFBVSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLElBQXJCLENBQTBCLEdBQTFCLENBQVosR0FBNkMsU0FBN0MsRUFBd0QsSUFBbkUsQ0FBTCxDQURLO0FBRUwsYUFBUSxTQUFSLEdBQW9CLFFBQVEsU0FBUixDQUFrQixPQUFsQixDQUEwQixFQUExQixFQUE4QixHQUE5QixDQUFwQixDQUZLO0lBRlA7RUFESzs7QUFTQSxVQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFNBQW5DLEVBQThDLE9BQTlDLEVBQXVEO0FBQzVELE9BQUksUUFBUSxnQkFBUixFQUEwQjtBQUM1QixhQUFRLGdCQUFSLENBQXlCLFNBQXpCLEVBQW9DLE9BQXBDLEVBRDRCO0lBQTlCLE1BRU87QUFDTCxhQUFRLFdBQVIsbUJBQXNDLFlBQVc7QUFDL0MsZUFBUSxJQUFSLENBQWEsT0FBYixFQUQrQztNQUFYLENBQXRDLENBREs7SUFGUCIsImZpbGUiOiJmbG9hdGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg4YTYyYjVhZjdkYzM1M2RkMWQ4XG4gKiovIiwiaW1wb3J0IEZsb2F0bCBmcm9tICcuL2Zsb2F0bCdcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9hdGw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9qcy9pbmRleC5qc1xuICoqLyIsImltcG9ydCB7IGdldEVsZW1lbnQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgYWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBmb2N1c2VkQ2xhc3MgPSAnZmxvYXRsLS1mb2N1c2VkJztcbmNvbnN0IGFjdGl2ZUNsYXNzID0gJ2Zsb2F0bC0tYWN0aXZlJztcbmNvbnN0IG11bHRpbGluZUNsYXNzID0gJ2Zsb2F0bC0tbXVsdGlsaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRsX19sYWJlbCcpWzBdO1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb2F0bF9faW5wdXQnKVswXTtcblxuICAgIHRoaXMuX2JpbmRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBfYmluZExpc3RlbmVycygpIHtcbiAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcbiAgICB9KTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGZvY3VzZWRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBldmVudCBvZiBbJ2tleXVwJywgJ2JsdXInLCAnY2hhbmdlJ10pIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgZXZlbnQsICgpID0+IHRoaXMuX2hhbmRsZUNoYW5nZSgpKTtcbiAgICB9XG4gIH1cblxuICBfaW5pdCgpIHtcbiAgICBpZiAodGhpcy5pbnB1dC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIG11bHRpbGluZUNsYXNzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVDaGFuZ2UoKTtcbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9qcy9mbG9hdGwuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIGlmIChqUXVlcnkgJiYgZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgIHJldHVybiBlbGVtZW50LmdldCgwKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAle2VsZW1lbnR9ICdpcyBub3QgYSB2YWxpZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWQgb3B0aW9ucyBhcmU6IERPTSBFbGVtZW50LCBqUXVlcnkuJ2ApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAle2NsYXNzTmFtZX1gO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyAnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJXtldmVudE5hbWV9YCwgZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2pzL3V0aWxzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
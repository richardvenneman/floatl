(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["floatl"] = factory();
	else
		root["floatl"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(1);
	
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
	          return _this.handleChange();
	        });
	      }
	    }
	  }, {
	    key: '_init',
	    value: function _init() {
	      if (this.input.tagName === 'TEXTAREA') {
	        (0, _utils.addClass)(this.element, multilineClass);
	      }
	
	      this.handleChange();
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange() {
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
/* 1 */
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
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwODMwZjVhYzE1MWQxN2JjMzcwNiIsIndlYnBhY2s6Ly8vLi9saWIvanMvZmxvYXRsLmpzIiwid2VicGFjazovLy8uL2xpYi9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0EsS0FBTSxlQUFlLGlCQUFmO0FBQ04sS0FBTSxjQUFjLGdCQUFkO0FBQ04sS0FBTSxpQkFBaUIsbUJBQWpCOztLQUVlO0FBQ25CLFlBRG1CLE1BQ25CLENBQVksT0FBWixFQUFxQjsyQkFERixRQUNFOztBQUNuQixVQUFLLE9BQUwsR0FBZSx1QkFBVyxPQUFYLENBQWYsQ0FEbUI7QUFFbkIsVUFBSyxLQUFMLEdBQWEsS0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBOEIsZ0JBQTlCLEVBQWdELENBQWhELENBQWIsQ0FGbUI7QUFHbkIsVUFBSyxLQUFMLEdBQWEsS0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBOEIsZ0JBQTlCLEVBQWdELENBQWhELENBQWIsQ0FIbUI7O0FBS25CLFVBQUssY0FBTCxHQUxtQjtBQU1uQixVQUFLLEtBQUwsR0FObUI7SUFBckI7O2dCQURtQjs7c0NBVUY7OztBQUNmLG9DQUFpQixLQUFLLEtBQUwsRUFBWSxPQUE3QixFQUFzQyxZQUFNO0FBQzFDLDhCQUFTLE1BQUssT0FBTCxFQUFjLFlBQXZCLEVBRDBDO1FBQU4sQ0FBdEMsQ0FEZTs7QUFLZixvQ0FBaUIsS0FBSyxLQUFMLEVBQVksTUFBN0IsRUFBcUMsWUFBTTtBQUN6QyxpQ0FBWSxNQUFLLE9BQUwsRUFBYyxZQUExQixFQUR5QztRQUFOLENBQXJDLENBTGU7O2tCQVNHLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsUUFBbEIsRUFUSDtBQVNmLGdEQUErQztBQUExQyxhQUFJLGdCQUFKLENBQTBDO0FBQzdDLHNDQUFpQixLQUFLLEtBQUwsRUFBWSxLQUE3QixFQUFvQztrQkFBTSxNQUFLLFlBQUw7VUFBTixDQUFwQyxDQUQ2QztRQUEvQzs7Ozs2QkFLTTtBQUNOLFdBQUksS0FBSyxLQUFMLENBQVcsT0FBWCxLQUF1QixVQUF2QixFQUFtQztBQUNyQyw4QkFBUyxLQUFLLE9BQUwsRUFBYyxjQUF2QixFQURxQztRQUF2Qzs7QUFJQSxZQUFLLFlBQUwsR0FMTTs7OztvQ0FRTztBQUNiLFdBQUksS0FBSyxLQUFMLENBQVcsS0FBWCxLQUFxQixFQUFyQixFQUF5QjtBQUMzQixpQ0FBWSxLQUFLLE9BQUwsRUFBYyxXQUExQixFQUQyQjtRQUE3QixNQUVPO0FBQ0wsOEJBQVMsS0FBSyxPQUFMLEVBQWMsV0FBdkIsRUFESztRQUZQOzs7O1VBakNpQjs7Ozs7Ozs7Ozs7Ozs7U0NOTDtTQVdBO1NBUUE7U0FTQTtBQTVCVCxVQUFTLFVBQVQsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDbEMsT0FBSSxRQUFRLE9BQVIsRUFBaUI7QUFDbkIsWUFBTyxPQUFQLENBRG1CO0lBQXJCLE1BRU8sSUFBSSxVQUFVLG1CQUFtQixNQUFuQixFQUEyQjtBQUM5QyxZQUFPLFFBQVEsR0FBUixDQUFZLENBQVosQ0FBUCxDQUQ4QztJQUF6QyxNQUVBO0FBQ0wsV0FBTSxJQUFJLFNBQUosMkdBQU4sQ0FESztJQUZBO0VBSEY7O0FBV0EsVUFBUyxRQUFULENBQWtCLE9BQWxCLEVBQTJCLFNBQTNCLEVBQXNDO0FBQzNDLE9BQUksUUFBUSxTQUFSLEVBQW1CO0FBQ3JCLGFBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixTQUF0QixFQURxQjtJQUF2QixNQUVPO0FBQ0wsYUFBUSxTQUFSLG9CQURLO0lBRlA7RUFESzs7QUFRQSxVQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEIsU0FBOUIsRUFBeUM7QUFDOUMsT0FBSSxRQUFRLFNBQVIsRUFBbUI7QUFDckIsYUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFNBQXpCLEVBRHFCO0lBQXZCLE1BRU87QUFDTCxVQUFLLElBQUksTUFBSixDQUFXLFlBQVksVUFBVSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLElBQXJCLENBQTBCLEdBQTFCLENBQVosR0FBNkMsU0FBN0MsRUFBd0QsSUFBbkUsQ0FBTCxDQURLO0FBRUwsYUFBUSxTQUFSLEdBQW9CLFFBQVEsU0FBUixDQUFrQixPQUFsQixDQUEwQixFQUExQixFQUE4QixHQUE5QixDQUFwQixDQUZLO0lBRlA7RUFESzs7QUFTQSxVQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFNBQW5DLEVBQThDLE9BQTlDLEVBQXVEO0FBQzVELE9BQUksUUFBUSxnQkFBUixFQUEwQjtBQUM1QixhQUFRLGdCQUFSLENBQXlCLFNBQXpCLEVBQW9DLE9BQXBDLEVBRDRCO0lBQTlCLE1BRU87QUFDTCxhQUFRLFdBQVIsbUJBQXNDLFlBQVc7QUFDL0MsZUFBUSxJQUFSLENBQWEsT0FBYixFQUQrQztNQUFYLENBQXRDLENBREs7SUFGUCIsImZpbGUiOiJmbG9hdGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmbG9hdGxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZmxvYXRsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwODMwZjVhYzE1MWQxN2JjMzcwNlxuICoqLyIsImltcG9ydCB7IGdldEVsZW1lbnQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgYWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBmb2N1c2VkQ2xhc3MgPSAnZmxvYXRsLS1mb2N1c2VkJztcbmNvbnN0IGFjdGl2ZUNsYXNzID0gJ2Zsb2F0bC0tYWN0aXZlJztcbmNvbnN0IG11bHRpbGluZUNsYXNzID0gJ2Zsb2F0bC0tbXVsdGlsaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRsX19sYWJlbCcpWzBdO1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb2F0bF9faW5wdXQnKVswXTtcblxuICAgIHRoaXMuX2JpbmRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBfYmluZExpc3RlbmVycygpIHtcbiAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcbiAgICB9KTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGZvY3VzZWRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBldmVudCBvZiBbJ2tleXVwJywgJ2JsdXInLCAnY2hhbmdlJ10pIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgZXZlbnQsICgpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCkpO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0KCkge1xuICAgIGlmICh0aGlzLmlucHV0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgbXVsdGlsaW5lQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9qcy9mbG9hdGwuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIGlmIChqUXVlcnkgJiYgZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgIHJldHVybiBlbGVtZW50LmdldCgwKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAle2VsZW1lbnR9ICdpcyBub3QgYSB2YWxpZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWQgb3B0aW9ucyBhcmU6IERPTSBFbGVtZW50LCBqUXVlcnkuJ2ApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAle2NsYXNzTmFtZX1gO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyAnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJXtldmVudE5hbWV9YCwgZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2pzL3V0aWxzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
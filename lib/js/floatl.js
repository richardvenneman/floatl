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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2JjYTBmMWQyNDI2NDJhNTdmZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mbG9hdGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQSxRQUFPLE9BQVAsb0I7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7QUFFQSxLQUFNLGVBQWUsaUJBQXJCO0FBQ0EsS0FBTSxjQUFjLGdCQUFwQjtBQUNBLEtBQU0saUJBQWlCLG1CQUF2Qjs7S0FFcUIsTTtBQUNuQixtQkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFVBQUssT0FBTCxHQUFlLHVCQUFXLE9BQVgsQ0FBZjtBQUNBLFVBQUssS0FBTCxHQUFhLEtBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLGdCQUE5QixFQUFnRCxDQUFoRCxDQUFiO0FBQ0EsVUFBSyxLQUFMLEdBQWEsS0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBOEIsZ0JBQTlCLEVBQWdELENBQWhELENBQWI7O0FBRUEsVUFBSyxjQUFMO0FBQ0EsVUFBSyxLQUFMO0FBQ0Q7Ozs7c0NBRWdCO0FBQUE7O0FBQ2Ysb0NBQWlCLEtBQUssS0FBdEIsRUFBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUMxQyw4QkFBUyxNQUFLLE9BQWQsRUFBdUIsWUFBdkI7QUFDRCxRQUZEOztBQUlBLG9DQUFpQixLQUFLLEtBQXRCLEVBQTZCLE1BQTdCLEVBQXFDLFlBQU07QUFDekMsaUNBQVksTUFBSyxPQUFqQixFQUEwQixZQUExQjtBQUNELFFBRkQ7O0FBTGUsa0JBU0csQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixRQUFsQixDQVRIO0FBU2YsZ0RBQStDO0FBQTFDLGFBQUksZ0JBQUo7QUFDSCxzQ0FBaUIsS0FBSyxLQUF0QixFQUE2QixLQUE3QixFQUFvQztBQUFBLGtCQUFNLE1BQUssYUFBTCxFQUFOO0FBQUEsVUFBcEM7QUFDRDtBQUNGOzs7NkJBRU87QUFDTixXQUFJLEtBQUssS0FBTCxDQUFXLE9BQVgsS0FBdUIsVUFBM0IsRUFBdUM7QUFDckMsOEJBQVMsS0FBSyxPQUFkLEVBQXVCLGNBQXZCO0FBQ0Q7O0FBRUQsWUFBSyxhQUFMO0FBQ0Q7OztxQ0FFZTtBQUNkLFdBQUksS0FBSyxLQUFMLENBQVcsS0FBWCxLQUFxQixFQUF6QixFQUE2QjtBQUMzQixpQ0FBWSxLQUFLLE9BQWpCLEVBQTBCLFdBQTFCO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsOEJBQVMsS0FBSyxPQUFkLEVBQXVCLFdBQXZCO0FBQ0Q7QUFDRjs7Ozs7O21CQXRDa0IsTTs7Ozs7Ozs7Ozs7U0NOTCxVLEdBQUEsVTtTQVdBLFEsR0FBQSxRO1NBUUEsVyxHQUFBLFc7U0FTQSxnQixHQUFBLGdCO0FBNUJULFVBQVMsVUFBVCxDQUFvQixPQUFwQixFQUE2QjtBQUNsQyxPQUFJLFFBQVEsT0FBWixFQUFxQjtBQUNuQixZQUFPLE9BQVA7QUFDRCxJQUZELE1BRU8sSUFBSSxVQUFVLG1CQUFtQixNQUFqQyxFQUF5QztBQUM5QyxZQUFPLFFBQVEsR0FBUixDQUFZLENBQVosQ0FBUDtBQUNELElBRk0sTUFFQTtBQUNMLFdBQU0sSUFBSSxTQUFKLDJHQUFOO0FBRUQ7QUFDRjs7QUFFTSxVQUFTLFFBQVQsQ0FBa0IsT0FBbEIsRUFBMkIsU0FBM0IsRUFBc0M7QUFDM0MsT0FBSSxRQUFRLFNBQVosRUFBdUI7QUFDckIsYUFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFNBQXRCO0FBQ0QsSUFGRCxNQUVPO0FBQ0wsYUFBUSxTQUFSO0FBQ0Q7QUFDRjs7QUFFTSxVQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEIsU0FBOUIsRUFBeUM7QUFDOUMsT0FBSSxRQUFRLFNBQVosRUFBdUI7QUFDckIsYUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFNBQXpCO0FBQ0QsSUFGRCxNQUVPO0FBQ0wsVUFBSyxJQUFJLE1BQUosQ0FBVyxZQUFZLFVBQVUsS0FBVixDQUFnQixHQUFoQixFQUFxQixJQUFyQixDQUEwQixHQUExQixDQUFaLEdBQTZDLFNBQXhELEVBQW1FLElBQW5FLENBQUw7QUFDQSxhQUFRLFNBQVIsR0FBb0IsUUFBUSxTQUFSLENBQWtCLE9BQWxCLENBQTBCLEVBQTFCLEVBQThCLEdBQTlCLENBQXBCO0FBQ0Q7QUFDRjs7QUFFTSxVQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFNBQW5DLEVBQThDLE9BQTlDLEVBQXVEO0FBQzVELE9BQUksUUFBUSxnQkFBWixFQUE4QjtBQUM1QixhQUFRLGdCQUFSLENBQXlCLFNBQXpCLEVBQW9DLE9BQXBDO0FBQ0QsSUFGRCxNQUVPO0FBQ0wsYUFBUSxXQUFSLG1CQUFzQyxZQUFXO0FBQy9DLGVBQVEsSUFBUixDQUFhLE9BQWI7QUFDRCxNQUZEO0FBR0Q7QUFDRixFIiwiZmlsZSI6ImZsb2F0bC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgN2JjYTBmMWQyNDI2NDJhNTdmZWRcbiAqKi8iLCJpbXBvcnQgRmxvYXRsIGZyb20gJy4vZmxvYXRsJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb2F0bDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IHsgZ2V0RWxlbWVudCwgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBhZGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGZvY3VzZWRDbGFzcyA9ICdmbG9hdGwtLWZvY3VzZWQnO1xuY29uc3QgYWN0aXZlQ2xhc3MgPSAnZmxvYXRsLS1hY3RpdmUnO1xuY29uc3QgbXVsdGlsaW5lQ2xhc3MgPSAnZmxvYXRsLS1tdWx0aWxpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KTtcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9hdGxfX2xhYmVsJylbMF07XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRsX19pbnB1dCcpWzBdO1xuXG4gICAgdGhpcy5fYmluZExpc3RlbmVycygpO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIF9iaW5kTGlzdGVuZXJzKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBmb2N1c2VkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCAnYmx1cicsICgpID0+IHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGV2ZW50IG9mIFsna2V5dXAnLCAnYmx1cicsICdjaGFuZ2UnXSkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCBldmVudCwgKCkgPT4gdGhpcy5faGFuZGxlQ2hhbmdlKCkpO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0KCkge1xuICAgIGlmICh0aGlzLmlucHV0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgbXVsdGlsaW5lQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZUNoYW5nZSgpO1xuICB9XG5cbiAgX2hhbmRsZUNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgYWN0aXZlQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIGFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2Zsb2F0bC5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudGFnTmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IGVsc2UgaWYgKGpRdWVyeSAmJiBlbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0KDApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCV7ZWxlbWVudH0gJ2lzIG5vdCBhIHZhbGlkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBWYWxpZCBvcHRpb25zIGFyZTogRE9NIEVsZW1lbnQsIGpRdWVyeS4nYCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICV7Y2xhc3NOYW1lfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnICcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hdHRhY2hFdmVudChgb24le2V2ZW50TmFtZX1gLCBmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIuY2FsbChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvdXRpbHMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
var floatl =
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
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTIxZDVlMzk1MWVhNGExYzQxMzgiLCJ3ZWJwYWNrOi8vLy4vbGliL2pzL2Zsb2F0bC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBLEtBQU0sZUFBZSxpQkFBZjtBQUNOLEtBQU0sY0FBYyxnQkFBZDtBQUNOLEtBQU0saUJBQWlCLG1CQUFqQjs7S0FFZTtBQUNuQixZQURtQixNQUNuQixDQUFZLE9BQVosRUFBcUI7MkJBREYsUUFDRTs7QUFDbkIsVUFBSyxPQUFMLEdBQWUsdUJBQVcsT0FBWCxDQUFmLENBRG1CO0FBRW5CLFVBQUssS0FBTCxHQUFhLEtBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLGdCQUE5QixFQUFnRCxDQUFoRCxDQUFiLENBRm1CO0FBR25CLFVBQUssS0FBTCxHQUFhLEtBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLGdCQUE5QixFQUFnRCxDQUFoRCxDQUFiLENBSG1COztBQUtuQixVQUFLLGNBQUwsR0FMbUI7QUFNbkIsVUFBSyxLQUFMLEdBTm1CO0lBQXJCOztnQkFEbUI7O3NDQVVGOzs7QUFDZixvQ0FBaUIsS0FBSyxLQUFMLEVBQVksT0FBN0IsRUFBc0MsWUFBTTtBQUMxQyw4QkFBUyxNQUFLLE9BQUwsRUFBYyxZQUF2QixFQUQwQztRQUFOLENBQXRDLENBRGU7O0FBS2Ysb0NBQWlCLEtBQUssS0FBTCxFQUFZLE1BQTdCLEVBQXFDLFlBQU07QUFDekMsaUNBQVksTUFBSyxPQUFMLEVBQWMsWUFBMUIsRUFEeUM7UUFBTixDQUFyQyxDQUxlOztrQkFTRyxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFFBQWxCLEVBVEg7QUFTZixnREFBK0M7QUFBMUMsYUFBSSxnQkFBSixDQUEwQztBQUM3QyxzQ0FBaUIsS0FBSyxLQUFMLEVBQVksS0FBN0IsRUFBb0M7a0JBQU0sTUFBSyxZQUFMO1VBQU4sQ0FBcEMsQ0FENkM7UUFBL0M7Ozs7NkJBS007QUFDTixXQUFJLEtBQUssS0FBTCxDQUFXLE9BQVgsS0FBdUIsVUFBdkIsRUFBbUM7QUFDckMsOEJBQVMsS0FBSyxPQUFMLEVBQWMsY0FBdkIsRUFEcUM7UUFBdkM7O0FBSUEsWUFBSyxZQUFMLEdBTE07Ozs7b0NBUU87QUFDYixXQUFJLEtBQUssS0FBTCxDQUFXLEtBQVgsS0FBcUIsRUFBckIsRUFBeUI7QUFDM0IsaUNBQVksS0FBSyxPQUFMLEVBQWMsV0FBMUIsRUFEMkI7UUFBN0IsTUFFTztBQUNMLDhCQUFTLEtBQUssT0FBTCxFQUFjLFdBQXZCLEVBREs7UUFGUDs7OztVQWpDaUI7Ozs7Ozs7Ozs7Ozs7O1NDTkw7U0FXQTtTQVFBO1NBU0E7QUE1QlQsVUFBUyxVQUFULENBQW9CLE9BQXBCLEVBQTZCO0FBQ2xDLE9BQUksUUFBUSxPQUFSLEVBQWlCO0FBQ25CLFlBQU8sT0FBUCxDQURtQjtJQUFyQixNQUVPLElBQUksVUFBVSxtQkFBbUIsTUFBbkIsRUFBMkI7QUFDOUMsWUFBTyxRQUFRLEdBQVIsQ0FBWSxDQUFaLENBQVAsQ0FEOEM7SUFBekMsTUFFQTtBQUNMLFdBQU0sSUFBSSxTQUFKLDJHQUFOLENBREs7SUFGQTtFQUhGOztBQVdBLFVBQVMsUUFBVCxDQUFrQixPQUFsQixFQUEyQixTQUEzQixFQUFzQztBQUMzQyxPQUFJLFFBQVEsU0FBUixFQUFtQjtBQUNyQixhQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsU0FBdEIsRUFEcUI7SUFBdkIsTUFFTztBQUNMLGFBQVEsU0FBUixvQkFESztJQUZQO0VBREs7O0FBUUEsVUFBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCLFNBQTlCLEVBQXlDO0FBQzlDLE9BQUksUUFBUSxTQUFSLEVBQW1CO0FBQ3JCLGFBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixTQUF6QixFQURxQjtJQUF2QixNQUVPO0FBQ0wsVUFBSyxJQUFJLE1BQUosQ0FBVyxZQUFZLFVBQVUsS0FBVixDQUFnQixHQUFoQixFQUFxQixJQUFyQixDQUEwQixHQUExQixDQUFaLEdBQTZDLFNBQTdDLEVBQXdELElBQW5FLENBQUwsQ0FESztBQUVMLGFBQVEsU0FBUixHQUFvQixRQUFRLFNBQVIsQ0FBa0IsT0FBbEIsQ0FBMEIsRUFBMUIsRUFBOEIsR0FBOUIsQ0FBcEIsQ0FGSztJQUZQO0VBREs7O0FBU0EsVUFBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxTQUFuQyxFQUE4QyxPQUE5QyxFQUF1RDtBQUM1RCxPQUFJLFFBQVEsZ0JBQVIsRUFBMEI7QUFDNUIsYUFBUSxnQkFBUixDQUF5QixTQUF6QixFQUFvQyxPQUFwQyxFQUQ0QjtJQUE5QixNQUVPO0FBQ0wsYUFBUSxXQUFSLG1CQUFzQyxZQUFXO0FBQy9DLGVBQVEsSUFBUixDQUFhLE9BQWIsRUFEK0M7TUFBWCxDQUF0QyxDQURLO0lBRlAiLCJmaWxlIjoiZmxvYXRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5MjFkNWUzOTUxZWE0YTFjNDEzOFxuICoqLyIsImltcG9ydCB7IGdldEVsZW1lbnQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgYWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBmb2N1c2VkQ2xhc3MgPSAnZmxvYXRsLS1mb2N1c2VkJztcbmNvbnN0IGFjdGl2ZUNsYXNzID0gJ2Zsb2F0bC0tYWN0aXZlJztcbmNvbnN0IG11bHRpbGluZUNsYXNzID0gJ2Zsb2F0bC0tbXVsdGlsaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRsX19sYWJlbCcpWzBdO1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb2F0bF9faW5wdXQnKVswXTtcblxuICAgIHRoaXMuX2JpbmRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBfYmluZExpc3RlbmVycygpIHtcbiAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcbiAgICB9KTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGZvY3VzZWRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBldmVudCBvZiBbJ2tleXVwJywgJ2JsdXInLCAnY2hhbmdlJ10pIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgZXZlbnQsICgpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCkpO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0KCkge1xuICAgIGlmICh0aGlzLmlucHV0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgbXVsdGlsaW5lQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9qcy9mbG9hdGwuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIGlmIChqUXVlcnkgJiYgZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgIHJldHVybiBlbGVtZW50LmdldCgwKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAle2VsZW1lbnR9ICdpcyBub3QgYSB2YWxpZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWQgb3B0aW9ucyBhcmU6IERPTSBFbGVtZW50LCBqUXVlcnkuJ2ApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAle2NsYXNzTmFtZX1gO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyAnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJXtldmVudE5hbWV9YCwgZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2pzL3V0aWxzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _floatl = __webpack_require__(0);

var _floatl2 = _interopRequireDefault(_floatl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _floatl2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTNmYjk0Mzc0Yjk0NjZjZTE4ZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zsb2F0bC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImZvY3VzZWRDbGFzcyIsImFjdGl2ZUNsYXNzIiwibXVsdGlsaW5lQ2xhc3MiLCJGbG9hdGwiLCJlbGVtZW50IiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJfYmluZExpc3RlbmVycyIsIl9pbml0IiwiZXZlbnQiLCJfaGFuZGxlQ2hhbmdlIiwidGFnTmFtZSIsInZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsImdldCIsIlR5cGVFcnJvciIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwicmVwbGFjZSIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImNhbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7OztBQUVBLElBQU1BLGVBQWUsaUJBQXJCO0FBQ0EsSUFBTUMsY0FBYyxnQkFBcEI7QUFDQSxJQUFNQyxpQkFBaUIsbUJBQXZCOztJQUVxQkMsTTtBQUNuQixrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWUsdUJBQVdBLE9BQVgsQ0FBZjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFLRCxPQUFMLENBQWFFLGdCQUFiLENBQThCLGdCQUE5QixFQUFnRCxDQUFoRCxDQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtILE9BQUwsQ0FBYUUsZ0JBQWIsQ0FBOEIsZ0JBQTlCLEVBQWdELENBQWhELENBQWI7QUFDQSxRQUFJLENBQUMsS0FBS0QsS0FBTixJQUFlLENBQUMsS0FBS0UsS0FBekIsRUFBZ0M7QUFDaEMsU0FBS0MsY0FBTDtBQUNBLFNBQUtDLEtBQUw7QUFDRDs7OztxQ0FFZ0I7QUFBQTs7QUFDZixtQ0FBaUIsS0FBS0YsS0FBdEIsRUFBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUMxQyw2QkFBUyxNQUFLSCxPQUFkLEVBQXVCSixZQUF2QjtBQUNELE9BRkQ7O0FBSUEsbUNBQWlCLEtBQUtPLEtBQXRCLEVBQTZCLE1BQTdCLEVBQXFDLFlBQU07QUFDekMsZ0NBQVksTUFBS0gsT0FBakIsRUFBMEJKLFlBQTFCO0FBQ0QsT0FGRDs7QUFMZSxpQkFTRyxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBVEg7QUFTZiwrQ0FBd0Q7QUFBbkQsWUFBSVUsZ0JBQUo7QUFDSCxxQ0FBaUIsS0FBS0gsS0FBdEIsRUFBNkJHLEtBQTdCLEVBQW9DO0FBQUEsaUJBQU0sTUFBS0MsYUFBTCxFQUFOO0FBQUEsU0FBcEM7QUFDRDtBQUNGOzs7NEJBRU87QUFDTixVQUFJLEtBQUtKLEtBQUwsQ0FBV0ssT0FBWCxLQUF1QixVQUEzQixFQUF1QztBQUNyQyw2QkFBUyxLQUFLUixPQUFkLEVBQXVCRixjQUF2QjtBQUNEOztBQUVELFdBQUtTLGFBQUw7QUFDRDs7O29DQUVlO0FBQ2QsVUFBSSxLQUFLSixLQUFMLENBQVdNLEtBQVgsS0FBcUIsRUFBekIsRUFBNkI7QUFDM0IsZ0NBQVksS0FBS1QsT0FBakIsRUFBMEJILFdBQTFCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsNkJBQVMsS0FBS0csT0FBZCxFQUF1QkgsV0FBdkI7QUFDRDtBQUNGOzs7Ozs7a0JBdENrQkUsTTs7Ozs7Ozs7O0FDTnJCOzs7Ozs7QUFFQVcsT0FBT0MsT0FBUCxvQjs7Ozs7Ozs7Ozs7O1FDRmdCQyxVLEdBQUFBLFU7UUFXQUMsUSxHQUFBQSxRO1FBUUFDLFcsR0FBQUEsVztRQVNBQyxnQixHQUFBQSxnQjtBQTVCVCxTQUFTSCxVQUFULENBQW9CWixPQUFwQixFQUE2QjtBQUNsQyxNQUFJQSxRQUFRUSxPQUFaLEVBQXFCO0FBQ25CLFdBQU9SLE9BQVA7QUFDRCxHQUZELE1BRU8sSUFBSWdCLFVBQVVoQixtQkFBbUJnQixNQUFqQyxFQUF5QztBQUM5QyxXQUFPaEIsUUFBUWlCLEdBQVIsQ0FBWSxDQUFaLENBQVA7QUFDRCxHQUZNLE1BRUE7QUFDTCxVQUFNLElBQUlDLFNBQUosMkdBQU47QUFFRDtBQUNGOztBQUVNLFNBQVNMLFFBQVQsQ0FBa0JiLE9BQWxCLEVBQTJCbUIsU0FBM0IsRUFBc0M7QUFDM0MsTUFBSW5CLFFBQVFvQixTQUFaLEVBQXVCO0FBQ3JCcEIsWUFBUW9CLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCRixTQUF0QjtBQUNELEdBRkQsTUFFTztBQUNMbkIsWUFBUW1CLFNBQVI7QUFDRDtBQUNGOztBQUVNLFNBQVNMLFdBQVQsQ0FBcUJkLE9BQXJCLEVBQThCbUIsU0FBOUIsRUFBeUM7QUFDOUMsTUFBSW5CLFFBQVFvQixTQUFaLEVBQXVCO0FBQ3JCcEIsWUFBUW9CLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCSCxTQUF6QjtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1JLEtBQUssSUFBSUMsTUFBSixDQUFXLFlBQVlMLFVBQVVNLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCLEdBQTFCLENBQVosR0FBNkMsU0FBeEQsRUFBbUUsSUFBbkUsQ0FBWDtBQUNBMUIsWUFBUW1CLFNBQVIsR0FBb0JuQixRQUFRbUIsU0FBUixDQUFrQlEsT0FBbEIsQ0FBMEJKLEVBQTFCLEVBQThCLEdBQTlCLENBQXBCO0FBQ0Q7QUFDRjs7QUFFTSxTQUFTUixnQkFBVCxDQUEwQmYsT0FBMUIsRUFBbUM0QixTQUFuQyxFQUE4Q0MsT0FBOUMsRUFBdUQ7QUFDNUQsTUFBSTdCLFFBQVFlLGdCQUFaLEVBQThCO0FBQzVCZixZQUFRZSxnQkFBUixDQUF5QmEsU0FBekIsRUFBb0NDLE9BQXBDO0FBQ0QsR0FGRCxNQUVPO0FBQ0w3QixZQUFROEIsV0FBUixtQkFBc0MsWUFBVztBQUMvQ0QsY0FBUUUsSUFBUixDQUFhL0IsT0FBYjtBQUNELEtBRkQ7QUFHRDtBQUNGLEMiLCJmaWxlIjoiZmxvYXRsLmdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzZmI5NDM3NGI5NDY2Y2UxOGU3IiwiaW1wb3J0IHsgZ2V0RWxlbWVudCwgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBhZGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGZvY3VzZWRDbGFzcyA9ICdmbG9hdGwtLWZvY3VzZWQnO1xuY29uc3QgYWN0aXZlQ2xhc3MgPSAnZmxvYXRsLS1hY3RpdmUnO1xuY29uc3QgbXVsdGlsaW5lQ2xhc3MgPSAnZmxvYXRsLS1tdWx0aWxpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KTtcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9hdGxfX2xhYmVsJylbMF07XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxvYXRsX19pbnB1dCcpWzBdO1xuICAgIGlmICghdGhpcy5sYWJlbCB8fCAhdGhpcy5pbnB1dCkgcmV0dXJuO1xuICAgIHRoaXMuX2JpbmRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBfYmluZExpc3RlbmVycygpIHtcbiAgICBhZGRFdmVudExpc3RlbmVyKHRoaXMuaW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcbiAgICB9KTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGZvY3VzZWRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBldmVudCBvZiBbJ2tleXVwJywgJ2JsdXInLCAnY2hhbmdlJywgJ2lucHV0J10pIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgZXZlbnQsICgpID0+IHRoaXMuX2hhbmRsZUNoYW5nZSgpKTtcbiAgICB9XG4gIH1cblxuICBfaW5pdCgpIHtcbiAgICBpZiAodGhpcy5pbnB1dC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIG11bHRpbGluZUNsYXNzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVDaGFuZ2UoKTtcbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIGFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvZmxvYXRsLmpzIiwiaW1wb3J0IEZsb2F0bCBmcm9tICcuL2Zsb2F0bCdcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9hdGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCJleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIGlmIChqUXVlcnkgJiYgZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgIHJldHVybiBlbGVtZW50LmdldCgwKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAle2VsZW1lbnR9ICdpcyBub3QgYSB2YWxpZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWQgb3B0aW9ucyBhcmU6IERPTSBFbGVtZW50LCBqUXVlcnkuJ2ApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAle2NsYXNzTmFtZX1gO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyAnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJXtldmVudE5hbWV9YCwgZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
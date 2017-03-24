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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDU2YWNmODg3MWRmZDM2NjQ5ZjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zsb2F0bC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImZvY3VzZWRDbGFzcyIsImFjdGl2ZUNsYXNzIiwibXVsdGlsaW5lQ2xhc3MiLCJGbG9hdGwiLCJlbGVtZW50IiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJfYmluZExpc3RlbmVycyIsIl9pbml0IiwiZXZlbnQiLCJfaGFuZGxlQ2hhbmdlIiwidGFnTmFtZSIsInZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsImdldCIsIlR5cGVFcnJvciIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlIiwiUmVnRXhwIiwic3BsaXQiLCJqb2luIiwicmVwbGFjZSIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImNhbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJI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LFVBQVVNLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCLEdBQTFCLENBQVosR0FBNkMsU0FBeEQsRUFBbUUsSUFBbkUsQ0FBWDtBQUNBMUIsWUFBUW1CLFNBQVIsR0FBb0JuQixRQUFRbUIsU0FBUixDQUFrQlEsT0FBbEIsQ0FBMEJKLEVBQTFCLEVBQThCLEdBQTlCLENBQXBCO0FBQ0Q7QUFDRjs7QUFFTSxTQUFTUixnQkFBVCxDQUEwQmYsT0FBMUIsRUFBbUM0QixTQUFuQyxFQUE4Q0MsT0FBOUMsRUFBdUQ7QUFDNUQsTUFBSTdCLFFBQVFlLGdCQUFaLEVBQThCO0FBQzVCZixZQUFRZSxnQkFBUixDQUF5QmEsU0FBekIsRUFBb0NDLE9BQXBDO0FBQ0QsR0FGRCxNQUVPO0FBQ0w3QixZQUFROEIsV0FBUixtQkFBc0MsWUFBVztBQUMvQ0QsY0FBUUUsSUFBUixDQUFhL0IsT0FBYjtBQUNELEtBRkQ7QUFHRDtBQUNGLEMiLCJmaWxlIjoiZmxvYXRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDU2YWNmODg3MWRmZDM2NjQ5ZjMiLCJpbXBvcnQgeyBnZXRFbGVtZW50LCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIGFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZm9jdXNlZENsYXNzID0gJ2Zsb2F0bC0tZm9jdXNlZCc7XG5jb25zdCBhY3RpdmVDbGFzcyA9ICdmbG9hdGwtLWFjdGl2ZSc7XG5jb25zdCBtdWx0aWxpbmVDbGFzcyA9ICdmbG9hdGwtLW11bHRpbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0bCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb2F0bF9fbGFiZWwnKVswXTtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbG9hdGxfX2lucHV0JylbMF07XG4gICAgaWYgKCF0aGlzLmxhYmVsIHx8ICF0aGlzLmlucHV0KSByZXR1cm47XG4gICAgdGhpcy5fYmluZExpc3RlbmVycygpO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIF9iaW5kTGlzdGVuZXJzKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGhpcy5pbnB1dCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCBmb2N1c2VkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCAnYmx1cicsICgpID0+IHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgZm9jdXNlZENsYXNzKTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGV2ZW50IG9mIFsna2V5dXAnLCAnYmx1cicsICdjaGFuZ2UnLCAnaW5wdXQnXSkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0LCBldmVudCwgKCkgPT4gdGhpcy5faGFuZGxlQ2hhbmdlKCkpO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0KCkge1xuICAgIGlmICh0aGlzLmlucHV0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgbXVsdGlsaW5lQ2xhc3MpO1xuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZUNoYW5nZSgpO1xuICB9XG5cbiAgX2hhbmRsZUNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgYWN0aXZlQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIGFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9mbG9hdGwuanMiLCJpbXBvcnQgRmxvYXRsIGZyb20gJy4vZmxvYXRsJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb2F0bDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9pbmRleC5qcyIsImV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudGFnTmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IGVsc2UgaWYgKGpRdWVyeSAmJiBlbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0KDApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCV7ZWxlbWVudH0gJ2lzIG5vdCBhIHZhbGlkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBWYWxpZCBvcHRpb25zIGFyZTogRE9NIEVsZW1lbnQsIGpRdWVyeS4nYCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICV7Y2xhc3NOYW1lfWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnICcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hdHRhY2hFdmVudChgb24le2V2ZW50TmFtZX1gLCBmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIuY2FsbChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
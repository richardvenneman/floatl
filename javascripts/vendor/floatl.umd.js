/* floatl version 1.0.5 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Floatl = factory());
}(this, (function () { 'use strict';

function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
    else {
        element.className += " " + className;
    }
}
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    }
    else {
        var re = new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi");
        element.className = element.className.replace(re, " ");
    }
}
function addEventListener(element, event, cb) {
    if (element.addEventListener) {
        element.addEventListener(event, cb);
    }
    else {
        element.attachEvent("on" + event, function () {
            cb.call(element);
        });
    }
}
function removeEventListener(element, event, cb) {
    if (element.removeEventListener) {
        element.removeEventListener(event, cb);
    }
    else {
        element.detachEvent("on" + event, cb);
    }
}

var Floatl = /** @class */ (function () {
    function Floatl(element) {
        var _this = this;
        this.handleChange = function () {
            if (_this.input.value === "") {
                removeClass(_this.element, Floatl.ACTIVE_CLASS);
            }
            else {
                addClass(_this.element, Floatl.ACTIVE_CLASS);
            }
        };
        this.addFocusedClass = function () {
            addClass(_this.element, Floatl.FOCUSED_CLASS);
        };
        this.removeFocusedClass = function () {
            removeClass(_this.element, Floatl.FOCUSED_CLASS);
        };
        this.element = element;
        this.label = element.querySelectorAll(".floatl__label")[0];
        this.input = element.querySelectorAll(".floatl__input")[0];
        // Return early if not both the label and input are present
        if (!this.label || !this.input) {
            return;
        }
        if (this.input.nodeName === "TEXTAREA") {
            addClass(this.element, Floatl.MULTILINE_CLASS);
        }
        // Handle initial value
        this.handleChange();
        // Bind event listeners
        addEventListener(this.input, "focus", this.addFocusedClass);
        addEventListener(this.input, "blur", this.removeFocusedClass);
        for (var _i = 0, _a = ["keyup", "blur", "change", "input"]; _i < _a.length; _i++) {
            var event_1 = _a[_i];
            addEventListener(this.input, event_1, this.handleChange);
        }
    }
    Floatl.prototype.destroy = function () {
        removeEventListener(this.input, "focus", this.addFocusedClass);
        removeEventListener(this.input, "blur", this.removeFocusedClass);
        for (var _i = 0, _a = ["keyup", "blur", "change", "input"]; _i < _a.length; _i++) {
            var event_2 = _a[_i];
            removeEventListener(this.input, event_2, this.handleChange);
        }
    };
    Floatl.FOCUSED_CLASS = "floatl--focused";
    Floatl.ACTIVE_CLASS = "floatl--active";
    Floatl.MULTILINE_CLASS = "floatl--multiline";
    return Floatl;
}());

return Floatl;

})));

import { getElement, addClass, removeClass, addEventListener } from './utils';

const focusedClass = 'floatl--focused';
const activeClass = 'floatl--active';
const multilineClass = 'floatl--multiline';

export default class Floatl {
  constructor(element) {
    this.element = getElement(element);
    this.label = this.element.querySelectorAll('.floatl__label')[0]
    this.input = this.element.querySelectorAll('.floatl__input')[0]

    this._bindListeners();
    this._init();
  }

  _bindListeners() {
    addEventListener(this.input, 'focus', () => {
      addClass(this.element, focusedClass);
    });

    addEventListener(this.input, 'blur', () => {
      removeClass(this.element, focusedClass);
    });
  }

  _init() {
    if (this.input.tagName === 'TEXTAREA') {
      addClass(this.element, multilineClass);
    }

    this.handleChange();
  }

  handleChange() {
    if (this.input.value === '') {
      removeClass(this.element, activeClass);
    } else {
      addClass(this.element, activeClass);
    }
  }
}

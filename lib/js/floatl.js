import { getElement, addClass, removeClass } from './utils';

const focusedClass = 'floatl--focused';
const activeClass = 'floatl--active';
const multilineClass = 'floatl--multiline';

export default class Floatl {
  constructor(element) {
    this.element = getElement(element);
    this.label = this.element.querySelectorAll('.floatl__label')[0]
    this.input = this.element.querySelectorAll('.floatl__input')[0]

    if (this.input.tagName === 'TEXTAREA') {
      addClass(this.element, multilineClass);
    }

    this.handleChange();
  }

  handleChange () {
    if (this.input.value === '') {
      removeClass(this.element, activeClass);
    } else {
      addClass(this.element, activeClass);
    }
  }
}

import { getElement, addClass, removeClass } from '../src/js/utils.js';
import { addEventListener } from '../src/js/utils.js';

describe('getElement', () => {
  beforeEach(function() {
    affix('#js-element');
  });

  it('throws when passing a non-DOM element', function() {
    let action = function() { return getElement('test'); };

    expect(action).toThrowError(TypeError);
  });

  it('returns the element when passing a HTML element', function() {
    let action = function() {
      let el = document.getElementById('js-element');

      return getElement(el);
    };

    expect(action).not.toThrow();
  });

  it('returns the element when passing a jQuery object', function() {
    let action = function() {
      let $el = $('#js-element');

      return getElement($el);
    };

    expect(action).not.toThrow();
  });
});

describe('addClass', () => {
  beforeEach(function() {
    affix('#js-element.test');

    this.element = document.getElementById('js-element');
  });

  it('adds a className to a DOM element', function() {
    addClass(this.element, 'test');

    expect(this.element).toHaveClass('test');
  });
});

describe('removeClass', () => {
  beforeEach(function() {
    affix('#js-element.test');

    this.element = document.getElementById('js-element');
  });

  it('removes a className from a DOM element', function() {
    removeClass(this.element, 'test');

    expect(this.element).not.toHaveClass('test');
  });
});

describe('addEventListener', () => {
  beforeEach(function() {
    affix('input#js-input');

    this.element = document.getElementById('js-input');
  });

  it('executes handler on attached DOM events', function() {
    let event = document.createEvent('HTMLEvents');
    event.initEvent('keyup', true, false);

    let handleEvent = () => {
      this.element.value = 'handleEvent changed value';
    };

    addEventListener(this.element, 'keyup', handleEvent);
    this.element.dispatchEvent(event);

    expect(this.element.value).toEqual('handleEvent changed value');
  });
});

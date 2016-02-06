import { getElement } from '../lib/js/utils.js';

describe('getElement', () => {
  beforeEach(function() {
    affix('#js-test');
  });

  it('throws when passing a non-DOM element', function() {
    let action = function() { return getElement('test'); };

    expect(action).toThrowError(TypeError);
  });

  it('returns the element when passing a HTML element', function() {
    let action = function() {
      let el = document.getElementById('js-test');

      return getElement(el);
    };

    expect(action).not.toThrow();
  });

  it('returns the element when passing a jQuery object', function() {
    let action = function() {
      let $el = $('#js-test');

      return getElement($el);
    };

    expect(action).not.toThrow();
  });
});

import Floatl from '../lib/js/floatl.js';

const focusedClass = 'floatl--focused';
const activeClass = 'floatl--active';
const multilineClass = 'floatl--multiline';

describe('getElement', () => {
  beforeEach(function() {
    affix('#js-floatl.floatl label#js-label.floatl__label');
    affix('#js-floatl.floatl input#js-input.floatl__input[type="text"]');
  });

  describe('Initialization', () => {
    it('throws on instantiates with a non-DOM element', function() {
      let action = function() {
        return new Floatl('test');
      };

      expect(action).toThrowError(TypeError);
    });

    it('instantiates with a HTML element', function() {
      let action = function() {
        let element = document.getElementById('js-floatl');
        return new Floatl(element);
      };

      expect(action).not.toThrow();
    });

    it('instantiates with a jQuery object', function() {
      let action = function() {
        let $element = $('#js-floatl');

        return new Floatl($element);
      };

      expect(action).not.toThrow();
    });
  });
});

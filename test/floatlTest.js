import Floatl from '../lib/js/floatl.js';

const focusedClass = 'floatl--focused';
const activeClass = 'floatl--active';
const multilineClass = 'floatl--multiline';

describe('getElement', () => {
  beforeEach(function() {
    affix('#js-floatl.floatl label#js-label.floatl__label+input#js-input.floatl__input[type="text"]');
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

    it(`adds %{activeClass} class if input has a value`, function() {
      let element = document.getElementById('js-floatl');
      let input = document.getElementById('js-input');
      input.value = 'Initial value';

      new Floatl(element);

      expect(element).toHaveClass(activeClass);
    });

    it(`adds %{activeClass} class if input has a value`, function() {
      let element = document.getElementById('js-floatl');
      let input = document.getElementById('js-input');
      input.value = 'Initial value';

      new Floatl(element);

      expect(element).toHaveClass(activeClass);
    });

    it(`does not add %{multilineClass} class if applied to an input`, function() {
      let element = document.getElementById('js-floatl');

      new Floatl(element);

      expect(element).not.toHaveClass(multilineClass);
    });

    it(`adds %{multilineClass} class if applied to a textarea`, function() {
      affix('#js-multiline-floatl.floatl label#js-label.floatl__label+textarea#js-input.floatl__input');

      let element = document.getElementById('js-multiline-floatl');

      new Floatl(element);

      expect(element).toHaveClass(multilineClass);
    });
  });
});

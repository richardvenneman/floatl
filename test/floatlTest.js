import Floatl from '../src/js/floatl.js';

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

  describe('Focused state', () => {
    beforeEach(function() {
      this.element = document.getElementById('js-floatl');
      this.input = document.getElementById('js-input');
      this.$input = $(this.input);

      new Floatl(this.element);
    });

    it(`adds %{focusedClass} class on focus`, function() {
      expect(this.element).not.toHaveClass(focusedClass);

      this.$input.focus();

      expect(this.element).toHaveClass(focusedClass);
    });

    it(`removes %{focusedClass} class on blur`, function() {
      this.$input.focus();

      expect(this.element).toHaveClass(focusedClass);

      this.$input.blur();

      expect(this.element).not.toHaveClass(focusedClass);
    });
  });

  describe('Acive state', () => {
    beforeEach(function() {
      this.element = document.getElementById('js-floatl');
      this.input = document.getElementById('js-input');
      this.$input = $(this.input);

      new Floatl(this.element);
    });

    it(`adds %{activeClass} class when entering characters`, function() {
      expect(this.element).not.toHaveClass(activeClass);

      this.$input.focus().val('test').blur();

      expect(this.element).toHaveClass(activeClass);
    });

    it(`removes %{activeClass} when all characters have been removed`, function() {
      this.$input.val('test').blur();
      this.$input.val('').blur();

      expect(this.element).not.toHaveClass(activeClass);
    });
  });
});

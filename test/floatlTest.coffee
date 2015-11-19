floatl = require('../lib/coffee/floatl.coffee')

describe 'Floatl', ->
  FOCUSED_CLASS = 'floatl--focused'
  ACTIVE_CLASS = 'floatl--active'
  MULTILINE_CLASS = 'floatl--multiline'

  beforeEach (done) ->
    @$floatl = $('<div class="floatl">
      <label class="floatl__label">Label text</label>
      <input class="floatl__input" type="text"></input>
    </div>').appendTo($(document.body))
    @$label = @$floatl.find('.floatl__label')
    @$input = @$floatl.find('.floatl__input')

    done()

  afterEach (done) ->
    @$floatl.remove()
    @$floatl = null
    @$label = null
    @$input = null

    done()

  describe 'Initialization', ->
    it 'throws on instantiates with a non-DOM element', ->
      init = -> new floatl('test')
      expect(init).toThrowError(TypeError)

    it 'instantiates with a HTML element', ->
      init = => new floatl(@$floatl.get(0))
      expect(init).not.toThrow()

    it 'instantiates with a jQuery object', ->
      init = => new floatl(@$floatl)
      expect(init).not.toThrow()

    it 'adds floatl--active class if input has a value', ->
      @$input.val('Initial value')
      new floatl(@$floatl.get(0))

      expect(@$floatl).toHaveClass(ACTIVE_CLASS)

    it 'does not add floatl--multiline class if applied to an input', ->
      new floatl(@$floatl.get(0))

      expect(@$floatl).not.toHaveClass(MULTILINE_CLASS)

    it 'adds floatl--multiline class if applied to a textarea', ->
      $floatl = $('<div class="floatl">
        <label class="floatl__label">Label text</label>
        <textarea class="floatl__input"></input>
      </div>').appendTo($(document.body))

      new floatl($floatl.get(0))

      expect($floatl).toHaveClass(MULTILINE_CLASS)

  describe 'Focused state', ->
    it 'adds floatl--focused class on focus', ->
      new floatl(@$floatl.get(0))

      expect(@$floatl).not.toHaveClass(FOCUSED_CLASS)

      @$input.focus()

      expect(@$floatl).toHaveClass(FOCUSED_CLASS)

    it 'removes floatl--focused class on blur', ->
      new floatl(@$floatl.get(0))

      @$input.focus()
      expect(@$floatl).toHaveClass(FOCUSED_CLASS)

      @$input.blur()
      expect(@$floatl).not.toHaveClass(FOCUSED_CLASS)

  describe 'Active state', ->
    it 'adds floatl--active class when characters have been entered', ->
      new floatl(@$floatl.get(0))

      expect(@$floatl).not.toHaveClass(ACTIVE_CLASS)

      @$input.focus().val('a').blur()

      expect(@$floatl).toHaveClass(ACTIVE_CLASS)

    it 'removes floatl--active when characters have been removed', ->
      new floatl(@$floatl.get(0))

      @$input.val('a').blur()
      @$input.val('').blur()

      expect(@$floatl).not.toHaveClass(ACTIVE_CLASS)

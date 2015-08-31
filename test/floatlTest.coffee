floatl = require('../lib/coffee/floatl.coffee')

describe 'Floatl', ->
  FOCUSED_CLASS = 'floatl--focused'
  ACTIVE_CLASS = 'floatl--active'

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

floatl = require('../lib/coffee/floatl.coffee')

describe 'Floatl', ->
  beforeAll ->
    @$body = $(document.body)

  beforeEach ->
    @$floatl = $('<div class="floatl">
      <label class="floatl__label">Label text</label>
      <input class="floatl__input" type="text"></input>
    </div>').appendTo(@$body)

  afterEach ->
    @$body.empty()

  it 'adds floatl--focused class on focus', ->
    new floatl(@$floatl.get(0))

    @$floatl.find('.floatl__input').focus()
    expect(@$floatl).toHaveClass('floatl--focused')

  it 'removes floatl--focused class on blur', ->
    new floatl(@$floatl.get(0))

    @$floatl.find('.floatl__input').focus()
    expect(@$floatl).toHaveClass('floatl--focused')
    @$floatl.find('.floatl__input').blur()
    expect(@$floatl).not.toHaveClass('floatl--focused')

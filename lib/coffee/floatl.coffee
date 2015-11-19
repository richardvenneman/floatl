module.exports = class Floatl
  FOCUSED_CLASS = 'floatl--focused'
  ACTIVE_CLASS = 'floatl--active'
  MULTILINE_CLASS = 'floatl--multiline'

  constructor: (element) ->
    @element = @getElement(element)
    @label = @element.querySelectorAll('.floatl__label')[0]
    @input = @element.querySelectorAll('.floatl__input')[0]

    @addEventListener @input, 'focus', =>
      @addClass(@element, FOCUSED_CLASS)

    @addEventListener @input, 'blur', =>
      @removeClass(@element, FOCUSED_CLASS)

    for event in ['keyup', 'blur', 'change']
      @addEventListener @input, event, @handleChange

    @addClass(@element, MULTILINE_CLASS) if @input.tagName is 'TEXTAREA'
    @handleChange()

  getElement: (el) ->
    if el.tagName?
      return el
    else if jQuery? and el instanceof jQuery
      return el.get(0)
    else
      throw new TypeError("#{el} 'is not a valid element. Valid options are: DOM Element, jQuery.'")

  handleChange: (event) =>
    if @input.value is ''
      @removeClass(@element, ACTIVE_CLASS)
    else
      @addClass(@element, ACTIVE_CLASS)

  # Utility functions
  ###################

  addClass: (el, className) ->
    if el.classList
      el.classList.add(className)
    else
      el.className += " #{className}"

  removeClass: (el, className) ->
    if el.classList
      el.classList.remove(className)
    else
      re = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi')
      el.className = el.className.replace(re, ' ')

  addEventListener: (el, eventName, handler) ->
    if el.addEventListener
      el.addEventListener eventName, handler
    else
      el.attachEvent "on#{eventName}", ->
        handler.call(el)

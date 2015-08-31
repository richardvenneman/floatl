module.exports = class Floatl
  FOCUSED_CLASS = 'floatl--focused'
  ACTIVE_CLASS = 'floatl--active'

  constructor: (element) ->
    @element = element
    @label = @element.querySelectorAll('.floatl__label')[0]
    @input = @element.querySelectorAll('.floatl__input')[0]

    @addEventListener @input, 'focus', =>
      @addClass(@element, FOCUSED_CLASS)

    @addEventListener @input, 'blur', =>
      @removeClass(@element, FOCUSED_CLASS)

    for event in ['keyup', 'blur', 'change']
      @addEventListener @input, event, @handleChange

  handleChange: (event) =>
    if @input.value is ''
      @removeClass(@element, ACTIVE_CLASS)
    else
      @addClass(@element, ACTIVE_CLASS)

  # Utility functions #
  #####################

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

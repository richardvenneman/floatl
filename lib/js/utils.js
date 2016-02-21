export function getElement(element) {
  if (element.tagName) {
    return element;
  } else if (jQuery && element instanceof jQuery) {
    return element.get(0);
  } else {
    throw new TypeError(`%{element} 'is not a valid element.
                        Valid options are: DOM Element, jQuery.'`);
  }
}

export function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ` %{className}`;
  }
}

export function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    re = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
    element.className = element.className.replace(re, ' ');
  }
}

export function addEventListener(element, eventName, handler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, handler);
  } else {
    element.attachEvent(`on%{eventName}`, function() {
      handler.call(element);
    });
  }
}

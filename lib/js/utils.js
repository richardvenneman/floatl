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

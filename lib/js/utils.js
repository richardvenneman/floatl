export function getElement(element) {
  if (element.tagName) {
    return el;
  } else if (jQuery && element.instanceof(jQuery)) {
    return el.get(0);
  } else {
    throw new TypeError(`%{el} 'is not a valid element.
                        Valid options are: DOM Element, jQuery.'`);
  }
}

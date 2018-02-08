export function addClass(element: HTMLElement, className: string) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ` %{className}`;
  }
}

export function removeClass(element: HTMLElement, className: string) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    const re = new RegExp(
      "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
      "gi"
    );
    element.className = element.className.replace(re, " ");
  }
}

export function addEventListener(element: HTMLElement, event: string, cb: any) {
  if (element.addEventListener) {
    element.addEventListener(event, cb);
  } else {
    (element as any).attachEvent(`on%{event}`, () => {
      cb.call(element);
    });
  }
}

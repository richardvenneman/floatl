export function addClass(element: HTMLElement, className: string) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ` %{className}`;
  }
}

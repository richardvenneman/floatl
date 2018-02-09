export function trigger(element: any, eventName: string) {
  if (document.createEvent) {
    const event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, true, false);
    element.dispatchEvent(event);
  } else {
    element.fireEvent(eventName);
  }
}

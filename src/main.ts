import {
  addClass,
  addEventListener,
  removeClass,
  removeEventListener
} from "./utils"

export class Floatl {
  public static readonly FOCUSED_CLASS = "floatl--focused"
  public static readonly ACTIVE_CLASS = "floatl--active"
  public static readonly MULTILINE_CLASS = "floatl--multiline"

  private element: HTMLElement
  private label: Element
  private input: Element

  constructor(element: HTMLElement) {
    this.element = element
    this.label = element.querySelectorAll(".floatl__label")[0]
    this.input = element.querySelectorAll(".floatl__input")[0]

    // Return early if not both the label and input are present
    if (!this.label || !this.input) {
      return
    }

    if (this.input.nodeName === "TEXTAREA") {
      addClass(this.element, Floatl.MULTILINE_CLASS)
    }

    // Handle initial value
    this.handleChange()

    // Bind event listeners
    addEventListener(this.input, "focus", this.addFocusedClass)
    addEventListener(this.input, "blur", this.removeFocusedClass)

    for (const event of ["keyup", "blur", "change", "input"]) {
      addEventListener(this.input, event, this.handleChange)
    }
  }

  public destroy() {
    removeEventListener(this.input, "focus", this.addFocusedClass)
    removeEventListener(this.input, "blur", this.removeFocusedClass)

    for (const event of ["keyup", "blur", "change", "input"]) {
      removeEventListener(this.input, event, this.handleChange)
    }
  }

  private handleChange = () => {
    if ((this.input as HTMLInputElement | HTMLTextAreaElement).value === "") {
      removeClass(this.element, Floatl.ACTIVE_CLASS)
    } else {
      addClass(this.element, Floatl.ACTIVE_CLASS)
    }
  }

  private addFocusedClass = () => {
    addClass(this.element, Floatl.FOCUSED_CLASS)
  }

  private removeFocusedClass = () => {
    removeClass(this.element, Floatl.FOCUSED_CLASS)
  }
}

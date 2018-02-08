import { addClass, addEventListener, removeClass } from "./utils";

export class Floatl {
  public static readonly FOCUSED_CLASS = "floatl--focused";
  public static readonly ACTIVE_CLASS = "floatl--active";
  public static readonly MULTILINE_CLASS = "floatl--multiline";

  private element: HTMLElement;
  private label: Element;
  private input: Element;

  constructor(element: HTMLElement) {
    this.element = element;
    this.label = element.querySelectorAll(".floatl__label")[0];
    this.input = element.querySelectorAll(".floatl__input")[0];

    // Return early if not both the label and input are present
    if (!this.label || !this.input) {
      return;
    }

    if (this.input.nodeName === "TEXTAREA") {
      addClass(this.element, Floatl.MULTILINE_CLASS);
    }

    this.handleChange();
    this.bindListeners();
  }

  private handleChange() {
    if ((this.input as HTMLInputElement | HTMLTextAreaElement).value === "") {
      removeClass(this.element, Floatl.ACTIVE_CLASS);
    } else {
      addClass(this.element, Floatl.ACTIVE_CLASS);
    }
  }

  private bindListeners() {
    addEventListener(this.input, "focus", () => {
      addClass(this.element, Floatl.FOCUSED_CLASS);
    });

    addEventListener(this.input, "blur", () => {
      removeClass(this.element, Floatl.FOCUSED_CLASS);
    });

    for (const event of ["keyup", "blur", "change", "input"]) {
      addEventListener(this.input, event, () => this.handleChange());
    }
  }
}

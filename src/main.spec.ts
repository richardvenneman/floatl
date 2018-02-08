import { Floatl } from "./main";

describe("Floatl", () => {
  let fixture;

  beforeEach(() => {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div id="fixture">
      <div id="floatlOne" class="floatl">
        <label class="floatl__label">Name</label>
        <input id="floatlOneInput" type="text" class="floatl__input"></input>
      </div>
      <div id="floatlTwo" class="floatl">
        <label class="floatl__label">Name</label>
        <textarea id="floatlTwoInput" class="floatl__input"></textarea>
      </div>
    </div>`
    );
    fixture = document.getElementById("fixture");
  });

  afterEach(() => {
    document.body.removeChild(fixture);
  });

  describe("Initialization", () => {
    it("Inits with a HTML element", () => {
      const action = () => {
        return new Floatl(document.getElementById("floatlOne"));
      };

      expect(action).not.toThrow();
    });

    it(`adds ${Floatl.activeClass} class if input has a value`, () => {
      const element = document.getElementById("floatlOne");
      const input = document.getElementById("floatlOneInput");
      (input as HTMLInputElement).value = "Initial value";
      const floatl = new Floatl(element);

      expect(element.classList.contains(`${Floatl.activeClass}`)).toBeTruthy();
    });

    it(`does not add ${Floatl.multilineClass} class if not a textarea`, () => {
      const element = document.getElementById("floatlOne");
      const floatl = new Floatl(element);

      expect(
        element.classList.contains(`${Floatl.multilineClass}`)
      ).toBeFalsy();
    });

    it(`adds ${Floatl.multilineClass} class if applied to a textarea`, () => {
      const element = document.getElementById("floatlTwo");
      const floatl = new Floatl(element);

      expect(
        element.classList.contains(`${Floatl.multilineClass}`)
      ).toBeTruthy();
    });
  });

  describe("Focused state", () => {
    let element;
    let input;

    beforeEach(() => {
      element = document.getElementById("floatlOne");
      input = document.getElementById("floatlOneInput");
      const floatl = new Floatl(element);
    });

    it(`adds ${Floatl.focusedClass} class on focus`, () => {
      expect(element.classList.contains(Floatl.focusedClass)).toBeFalsy();

      input.focus();

      expect(element.classList.contains(Floatl.focusedClass)).toBeTruthy();
    });

    it(`removes ${Floatl.focusedClass} class on blur`, () => {
      input.focus();

      expect(element.classList.contains(Floatl.focusedClass)).toBeTruthy();

      input.blur();

      expect(element.classList.contains(Floatl.focusedClass)).toBeFalsy();
    });
  });

  describe("Active state", () => {
    let element;
    let input;

    beforeEach(() => {
      element = document.getElementById("floatlOne");
      input = document.getElementById("floatlOneInput");
      const floatl = new Floatl(element);
    });

    it(`adds ${Floatl.activeClass} class when entering characters`, () => {
      expect(element.classList.contains(Floatl.activeClass)).toBeFalsy();

      input.focus();
      input.value = "test";
      input.blur();

      expect(element.classList.contains(Floatl.activeClass)).toBeTruthy();
    });

    it(`removes ${Floatl.activeClass} removing all characters`, () => {
      input.value = "test";
      input.blur();
      input.value = "";
      input.blur();

      expect(element.classList.contains(Floatl.activeClass)).toBeFalsy();
    });
  });
});

import { Floatl } from "../src/main";
import { trigger } from "./specHelpers";

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

    it(`adds ${Floatl.ACTIVE_CLASS} class if input has a value`, () => {
      const element = document.getElementById("floatlOne");
      const input = document.getElementById("floatlOneInput");
      (input as HTMLInputElement).value = "Initial value";
      const floatl = new Floatl(element);

      expect(element.classList.contains(Floatl.ACTIVE_CLASS)).toBeTruthy();
    });

    it(`does not add ${Floatl.MULTILINE_CLASS} class if not a textarea`, () => {
      const element = document.getElementById("floatlOne");
      const floatl = new Floatl(element);

      expect(element.classList.contains(Floatl.MULTILINE_CLASS)).toBeFalsy();
    });

    it(`adds ${Floatl.MULTILINE_CLASS} class if applied to a textarea`, () => {
      const element = document.getElementById("floatlTwo");
      const floatl = new Floatl(element);

      expect(element.classList.contains(Floatl.MULTILINE_CLASS)).toBeTruthy();
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

    it(`adds ${Floatl.FOCUSED_CLASS} class on focus`, () => {
      expect(element.classList.contains(Floatl.FOCUSED_CLASS)).toBeFalsy();

      trigger(input, "focus");

      expect(element.classList.contains(Floatl.FOCUSED_CLASS)).toBeTruthy();
    });

    it(`removes ${Floatl.FOCUSED_CLASS} class on blur`, () => {
      trigger(input, "focus");

      expect(element.classList.contains(Floatl.FOCUSED_CLASS)).toBeTruthy();

      trigger(input, "blur");

      expect(element.classList.contains(Floatl.FOCUSED_CLASS)).toBeFalsy();
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

    it(`adds ${Floatl.ACTIVE_CLASS} class when entering characters`, () => {
      expect(element.classList.contains(Floatl.ACTIVE_CLASS)).toBeFalsy();

      input.value = "test";
      trigger(input, "keyup");

      expect(element.classList.contains(Floatl.ACTIVE_CLASS)).toBeTruthy();
    });

    it(`removes ${Floatl.ACTIVE_CLASS} removing all characters`, () => {
      input.value = "test";
      trigger(input, "keyup");
      input.value = "";
      trigger(input, "keyup");

      expect(element.classList.contains(Floatl.ACTIVE_CLASS)).toBeFalsy();
    });
  });

  describe("Destroy", () => {
    it("removes event listeners when destroying", () => {
      const element = document.getElementById("floatlOne");
      const input = document.getElementById(
        "floatlOneInput"
      ) as HTMLInputElement;
      const floatl = new Floatl(element);

      floatl.destroy();

      trigger(input, "focus");

      expect(element.classList.contains(Floatl.FOCUSED_CLASS)).toBeFalsy();

      input.value = "test";
      trigger(input, "keyup");

      expect(element.classList.contains(Floatl.ACTIVE_CLASS)).toBeFalsy();
    });
  });
});

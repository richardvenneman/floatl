import {
  addClass,
  addEventListener,
  removeClass,
  removeEventListener
} from "../src/utils";

describe("Utils", () => {
  let fixture;

  beforeEach(() => {
    document.body.insertAdjacentHTML("afterbegin", `<div id="fixture"></div>`);
    fixture = document.getElementById("fixture");
  });

  afterEach(() => {
    document.body.removeChild(fixture);
  });

  describe("addClass", () => {
    it("adds a className to a DOM element", () => {
      addClass(fixture, "test");

      expect(fixture.className).toEqual("test");
    });

    it("adds a className to a DOM element with existing classes", () => {
      fixture.insertAdjacentHTML(
        "afterbegin",
        `<div id="element" class="one"></div>`
      );
      const element = document.getElementById("element");

      addClass(element, "test");

      expect(element.className).toEqual("one test");
    });
  });

  describe("removeClass", () => {
    it("removes a className from a DOM element", () => {
      addClass(fixture, "test");

      expect(fixture.className).toEqual("test");

      removeClass(fixture, "test");

      expect(fixture.className).toEqual("");
    });
  });

  describe("addEventListener", () => {
    it("executes callback on attached DOM events", () => {
      const event = document.createEvent("HTMLEvents");
      event.initEvent("click", true, true);

      const callback = () => {
        fixture.innerHTML = "callback changed value";
      };

      addEventListener(fixture, "click", callback);
      fixture.dispatchEvent(event);

      expect(fixture.innerHTML).toEqual("callback changed value");
    });
  });

  describe("removeEventListener", () => {
    it("works", () => {
      const cb = () => (fixture.innerHTML = "test");
      const event = document.createEvent("HTMLEvents");
      event.initEvent("click", true, true);

      addEventListener(fixture, "click", cb);
      fixture.dispatchEvent(event);

      expect(fixture.innerHTML).toEqual("test");

      fixture.innerHTML = "";

      removeEventListener(fixture, "click", cb);
      fixture.dispatchEvent(event);

      expect(fixture.innerHTML).toEqual("");
    });
  });
});

import { classNames } from "./classNames";

describe("classNames", () => {
  test("with first param only", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
      "someClass class1 class2",
    );
  });

  test("with mods", () => {
    expect(
      classNames("someClass", { isOpen: true, isClose: false }, [
        "class1",
        "class2",
      ]),
    ).toBe("someClass class1 class2 isOpen");
  });

  test("with mods undefined", () => {
    expect(
      classNames("someClass", { isOpen: undefined }, ["class1", "class2"]),
    ).toBe("someClass class1 class2");
  });
});

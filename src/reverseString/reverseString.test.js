import reverseString from "./reverseString";

test("reverseString Basic Test", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("reverseString long string", () => {
  expect(reverseString("hello-this-is-long-sentence")).toBe(
    'ecnetnes-gnol-si-siht-olleh'
  );
});

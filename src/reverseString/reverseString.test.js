import reverseString from "./reverseString";

test.skip("reverseString Basic Test", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test.skip("reverseString long string", () => {
  expect(reverseString("hello-this-is-long-sentence")).toBe(
    'ecnetnes-gnol-si-ht-olleh'
  );
});

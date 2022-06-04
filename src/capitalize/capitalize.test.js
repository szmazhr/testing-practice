import capitalize from "./capitalize";

test.skip("capitalize Basic Test", () => {
  expect(capitalize("hello")).toEqual("Hello");
});

test.skip("capitalize Empty Test", () => {
  expect(capitalize("")).toEqual("");
});
test.skip('capitalize long string', () => {
  expect(capitalize('hello-this-is-long-sentence')).toBe(
    'Hello-This-Is-Long-Sentence'
  );
});
test.skip('capitalize all uppercase', () => {
  expect(capitalize('HELLO WORLD!')).toBe('Hello World!');
});


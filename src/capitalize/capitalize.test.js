import capitalize from "./capitalize";

test("capitalize Basic Test", () => {
  expect(capitalize("hello")).toEqual("Hello");
});

test("capitalize Empty Test", () => {
  expect(capitalize("")).toEqual("");
});
test('capitalize long string', () => {
  expect(capitalize('hello-this-is-long-sentence')).toBe(
    'Hello-this-is-long-sentence'
  );
});
test('capitalize all uppercase', () => {
  expect(capitalize('HELLO WORLD!')).toBe('Hello world!');
});


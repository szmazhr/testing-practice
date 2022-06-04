import calculator from "./calculator";

test("calculator add basic", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test("calculator add negative", () => {
  expect(calculator.add(-1, -2)).toEqual(-3);
});

test("calculator add float", () => {
  expect(calculator.add(1.1, 2.2)).toEqual(3.3);
});

test('calculate subtract basic', () => {
  expect(calculator.subtract(1, 2)).toEqual(-1);
});

test('calculate subtract negative', () => {
  expect(calculator.subtract(-1, -2)).toEqual(1);
});
test('calculate subtract float', () => {
  expect(calculator.subtract(1.1, 2.2)).toEqual(-1.1);
});
test('calculate multiply basic', () => {
  expect(calculator.multiply(1, 2)).toEqual(2);
});
test('calculate multiply negative', () => {
  expect(calculator.multiply(-1, -2)).toEqual(2);
});
test('calculate multiply float', () => {
  expect(calculator.multiply(1.1, 2.2)).toEqual(2.42);
});
test('calculate divide basic', () => {
  expect(calculator.divide(1, 2)).toEqual(0.5);
});
test('calculate divide negative', () => {
  expect(calculator.divide(-1, -2)).toEqual(0.5);
});
test('calculate divide float', () => {
  expect(calculator.divide(1.1, 2.2)).toEqual(0.5);
});
test('calculate divide by zero', () => {
  expect(calculator.divide(1, 0)).toEqual("Error");
});

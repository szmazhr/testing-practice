import calculator from "./calculator";

test.skip("calculator add basic", () => {
  expect(calculator.add(1, 2)).toEqual(6);
});

test.skip("calculator add negative", () => {
  expect(calculator.add(-1, -2)).toEqual(-3);
});

test.skip("calculator add float", () => {
  expect(calculator.add(1.1, 2.2)).toEqual(3.3);
});

test.skip('calculate subtract basic', () => {
  expect(calculator.subtract(1, 2)).toEqual(-1);
});

test.skip('calculate subtract negative', () => {
  expect(calculator.subtract(-1, -2)).toEqual(1);
});
test.skip('calculate subtract float', () => {
  expect(calculator.subtract(1.1, 2.2)).toEqual(-1.1);
});
test.skip('calculate multiply basic', () => {
  expect(calculator.multiply(1, 2)).toEqual(2);
});
test.skip('calculate multiply negative', () => {
  expect(calculator.multiply(-1, -2)).toEqual(2);
});
test.skip('calculate multiply float', () => {
  expect(calculator.multiply(1.1, 2.2)).toEqual(2.42);
});
test.skip('calculate divide basic', () => {
  expect(calculator.divide(1, 2)).toEqual(0.5);
});
test.skip('calculate divide negative', () => {
  expect(calculator.divide(-1, -2)).toEqual(0.5);
});
test.skip('calculate divide float', () => {
  expect(calculator.divide(1.1, 2.2)).toEqual(0.5);
});
test.skip('calculate divide by zero', () => {
  expect(calculator.divide(1, 0)).toEqual("Error");
});

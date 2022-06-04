import analyzeArray from "./analyzeArray";


test.skip("analyzeArray Object", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toBeInstanceOf(Object);
});

test.skip('analyzeArray Basic Test', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test.skip('analyzeArray Empty Test', () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test.skip('analyzeArray Big Test', () => {
  expect(analyzeArray([1, 2, 15, 3, 4, 18, 5, 6, 7, 21, 8, 9, 10])).toEqual({
    average: 8,
    min: 1,
    max: 21,
    length: 13,
  });
});

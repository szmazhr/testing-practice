import caesarCipher from './caesarCipher';

test('caesarCipher Basic Test', () => {
  expect(caesarCipher('Hello', 1)).toEqual('Ifmmp');
});

test('caesarCipher Empty Test', () => {
  expect(caesarCipher('', 1)).toEqual('');
});

test('caesarCipher long string and negative num', () => {
  expect(caesarCipher('Hello-this-is-long', 20)).toBe(
    'Byffi-nbcm-cm-fiha'
  );
});

test("caesarCipher fast and last number letters", () => {
  expect(caesarCipher("abc ABC xyz XYZ", -15)).toBe('lmn LMN ijk IJK');
});

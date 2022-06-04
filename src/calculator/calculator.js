const calculator = {
  add(a, b) {
    return (a + b).toFixed(2) * 1;
  },
  subtract(a, b) {
    return (a - b).toFixed(2) * 1;
  },
  multiply(a, b) {
    return (a * b).toFixed(2) * 1;
  },
  divide(a, b) {
    return b ? (a / b).toFixed(2) * 1 : 'Error';
  }
}
export default calculator;
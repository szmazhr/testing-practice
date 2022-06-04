function analyzeArray(array){

  let result = {
    average: (array.length) ? (array.reduce((a, b) => a + b) / array.length).toFixed(2) * 1 : null,
    min: (array.length) ?  Math.min(...array) : null,
    max: (array.length) ? Math.max(...array) : null,
    length: array.length,
  };

  return result;
}

export default analyzeArray;
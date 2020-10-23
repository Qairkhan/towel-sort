
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined) {
    return [];
  }
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 1) {
      matrix[i] = matrix[i].reverse();
    }
  }
  for(let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
      result.push(matrix[i][x]);
    }
  }
  return result;
}

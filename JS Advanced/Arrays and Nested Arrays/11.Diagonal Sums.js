function diagonalSum(matrix) {
  let sum1 = 0;
  let sum2 = 0;
  const matrixL = matrix.length;
  for (let i = 0; i < matrixL; i++) {
    sum1 += matrix[i][i];
    sum2 += matrix[i][matrixL - 1 - i];
  }
  console.log(`${sum1} ${sum2}`);
}
diagonalSum([
  [20, 40],
  [10, 60],
]);
diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);

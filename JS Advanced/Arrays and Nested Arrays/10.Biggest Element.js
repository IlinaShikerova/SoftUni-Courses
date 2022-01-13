function biggestEl(matrix) {
  let biggestEl = matrix[0][0];
  for (let row of matrix) {
    for (let col of row) {
      let currentEl = Number(col);
      if (currentEl > biggestEl) {
        biggestEl = currentEl;
      }
    }
  }
  return biggestEl;
}
console.log(
  biggestEl([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
console.log(
  biggestEl([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
);

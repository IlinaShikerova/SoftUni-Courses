function extractIncreasingSubsetFromArr(arr) {
  let newArr = [];
  let curr = arr[0];
  for (let num of arr) {
    if (num >= curr) {
      newArr.push(num);
      curr = num;
    }
  }
  return newArr;
}
console.log(extractIncreasingSubsetFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsetFromArr([1, 2, 3, 4]));
console.log(extractIncreasingSubsetFromArr([20, 3, 2, 15, 6, 1]));
console.log(extractIncreasingSubsetFromArr([-20, -3, -2, -15, -6, -1]));

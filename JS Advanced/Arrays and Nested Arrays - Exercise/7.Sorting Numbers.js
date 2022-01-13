function sortingNums(arr) {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  let result = [];

  while (arr.length != 0) {
    result.push(arr.shift(), arr.pop());
  }
  return result;
}
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

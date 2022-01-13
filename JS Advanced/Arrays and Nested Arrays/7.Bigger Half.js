function biggerHalf(input) {
  function sort(arr) {
    let sorted = arr.sort((a, b) => a - b);
    return sorted;
  }
  let inputL = input.length;
  let newArr = [];
  if (inputL % 2 === 0) {
    newArr = sort(input).slice(inputL / 2);
  } else {
    newArr = sort(input).slice(Math.floor(inputL / 2));
  }
  return newArr;
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

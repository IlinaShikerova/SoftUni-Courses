function negativePositiveNum(input) {
  let result = [];
  while (input.length !== 0) {
    if (input[0] >= 0) {
      let curr = input.shift();
      result.push(curr);
    } else {
      let curr = input.shift();
      result.unshift(curr);
    }
  }
  return result;
}
console.log(negativePositiveNum([7, -2, 8, 9]));
console.log(negativePositiveNum([3, -2, 0, -1]));

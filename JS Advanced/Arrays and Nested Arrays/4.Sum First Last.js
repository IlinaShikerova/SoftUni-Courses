function sumFirstLast(input) {
  let result = 0;
  if (input.length < 1) {
    let firstEl = Number(input.shift());
    result = firstEl + firstEl;
  } else {
    let firstEl = Number(input.shift());
    let lastEl = Number(input.pop());
    result = firstEl + lastEl;
  }
  return result;
}
console.log(sumFirstLast(["20", "30", "40"]));
console.log(sumFirstLast(["5", "10"]));

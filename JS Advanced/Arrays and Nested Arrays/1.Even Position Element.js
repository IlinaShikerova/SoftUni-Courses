function EvenPositionEl(arr) {
  let arrL = arr.length;
  let result = [];
  for (let i = 0; i < arrL; i += 2) {
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}
EvenPositionEl(["20", "30", "40", "50", "60"]);
EvenPositionEl(["5", "10"]);

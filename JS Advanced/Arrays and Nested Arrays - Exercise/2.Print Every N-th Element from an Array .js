function printEveryNthEl(array, n) {
  let arrayL = array.length;
  let result = [];
  for (let i = 0; i < arrayL; i += n) {
    result.push(array[i]);
  }
  return result;
}
console.log(printEveryNthEl(["5", "20", "31", "4", "20"], 2));
console.log(printEveryNthEl(["dsa", "asd", "test", "tset"], 2));
console.log(printEveryNthEl(["1", "2", "3", "4", "5"], 6));

function rotateArray(array, n) {
  for (let i = 0; i < n; i++) {
    let pop = array.pop();
    let unshift = array.unshift(pop);
  }
  console.log(array.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);

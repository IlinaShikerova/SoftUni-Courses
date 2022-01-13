function smallestTwoNum(input) {
  let smallestNum = input.sort((a, b) => a - b).slice(0, 2);
  console.log(smallestNum.join(" "));
}
smallestTwoNum([30, 15, 50, 5]);
smallestTwoNum([3, 0, 10, 4, 7, 3]);

function sorted(arr, arg) {
  let result;
  if (arg == "asc") {
    result = arr.sort((a, b) => a - b);
  } else {
    result = arr.sort((a, b) => b - a);
  }
  return result;
}
console.log(sorted([14, 7, 17, 6, 8], "asc"));
console.log(sorted([14, 7, 17, 6, 8], "desc"));

function sumOfNum(num1, num2) {
  let n = Number(num1);
  let m = Number(num2);
  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNum("1", "5");
sumOfNum("-8", "20");

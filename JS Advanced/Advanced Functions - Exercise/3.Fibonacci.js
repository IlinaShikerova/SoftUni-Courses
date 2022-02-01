function getFibonator() {
  let n1 = 0;
  let n2 = 1;

  function fibonacci() {
    let result = n1 + n2;
    n2 = n1;
    n1 = result;
    return result;
  }
  return fibonacci;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

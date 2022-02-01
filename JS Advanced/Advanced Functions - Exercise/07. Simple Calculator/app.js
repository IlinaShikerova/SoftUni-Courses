function calculator() {
  let n1;
  let n2;
  let result;
  function init(selector1, selector2, resultSelector) {
    n1 = document.querySelector(selector1);
    n2 = document.querySelector(selector2);
    result = document.querySelector(resultSelector);
  }
  function add() {
    result.value = Number(n1.value) + Number(n2.value);
  }
  function subtract() {
    result.value = Number(n1.value) - Number(n2.value);
  }
  return { init, add, subtract };
}
const calculate = calculator();
calculate.init("#num1", "#num2", "#result");

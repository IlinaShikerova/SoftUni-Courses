function sumTable() {
  let products = document.querySelectorAll("table tr");
  let productsL = products.length;
  let sum = 0;
  for (let i = 1; i < productsL; i++) {
    let cols = products[i].children;
    let cost = cols[cols.length - 1].textContent;
    sum += Number(cost);
  }
  document.getElementById("sum").textContent = sum;
}

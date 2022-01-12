function buyFruit(fruit, weight, price) {
  let weightKg = weight / 1000;
  let money = price * weightKg;

  console.log(
    `I need $${money.toFixed(2)} to buy ${weightKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
buyFruit("orange", 2500, 1.8);
buyFruit("apple", 1563, 2.35);

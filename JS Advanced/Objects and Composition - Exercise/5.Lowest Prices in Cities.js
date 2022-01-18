function lowestPriceInCities(input) {
  let catalogue = {};
  input.forEach((element) => {
    let [town, product, price] = element.split(" | ");
    price = Number(price);
    if (!catalogue[product]) {
      catalogue[product] = { price, town };
    } else {
      if (catalogue[product].price > price) {
        catalogue[product] = { price, town };
      }
    }
  });
  for (let product in catalogue) {
    let [price, town] = Object.entries(catalogue[product]);
    console.log(`${product} -> ${price[1]} (${town[1]})`);
  }
}
lowestPriceInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

function storeCatalogue(input) {
  let catalogue = {};
  let sorted = input.sort((a, b) => a.localeCompare(b));
  for (let products of sorted) {
    let [product, price] = products.split(" : ");
    price = Number(price);
    if (!catalogue[product[0]]) {
      catalogue[product[0]] = [];
      catalogue[product[0]].push([product, price]);
    } else {
      catalogue[product[0]].push([product, price]);
    }
  }
  for (let element in catalogue) {
    console.log(element);
    for (let arr of catalogue[element]) {
      let [product, price] = arr;
      console.log(`  ${product}: ${price}`);
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
// storeCatalogue([
//   "Banana : 2",
//   "Rubic's Cube : 5",
//   "Raspberry P : 4999",
//   "Rolex : 100000",
//   "Rollon : 10",
//   "Rali Car : 2000000",
//   "Pesho : 0.000001",
//   "Barrel : 10",
// ]);

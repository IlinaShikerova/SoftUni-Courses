function solution() {
  let recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  let microelements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  function restock(item, qty) {
    microelements[item] += Number(qty);
    return "Success";
  }
  function prepare(item, qty) {
    qty = Number(qty);
    const remainingStorage = {};

    for (const el in recipes[item]) {
      const remaining = microelements[el] - recipes[item][el] * Number(qty);
      if (remaining < 0) {
        return `Error: not enough ${el} in stock`;
      } else {
        remainingStorage[el] = remaining;
      }
    }
    Object.assign(microelements, remainingStorage);
    return "Success";
  }
  function report() {
    return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
  }
  function control(input) {
    let [command, item, qty] = input.split(" ");
    qty = Number(qty);
    if (command === "restock") {
      return restock(item, qty);
    } else if (command === "prepare") {
      return prepare(item, qty);
    } else if (command === "report") {
      return report();
    }
  }
  return control;
}
let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

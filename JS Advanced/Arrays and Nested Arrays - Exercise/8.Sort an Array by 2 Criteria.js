function sortArrBy2Criteria(input) {
  let sort = input.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length === b.length) {
      return a.localeCompare(b);
    } else {
      return -1;
    }
  });
  console.log(sort.join("\n"));
}
sortArrBy2Criteria(["alpha", "beta", "gamma"]);
sortArrBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArrBy2Criteria(["test", "Deny", "omen", "Default"]);

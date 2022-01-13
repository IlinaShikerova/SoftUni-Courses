function listOfNames(names) {
  let sort = names.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < names.length; i++) {
    console.log(`${i + 1}.${sort[i]}`);
  }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);

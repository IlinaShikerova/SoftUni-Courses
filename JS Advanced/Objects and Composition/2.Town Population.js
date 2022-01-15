function townPopulation(input) {
  let townData = {};
  for (let town of input) {
    let [city, population] = town.split(" <-> ");
    if (townData[city]) {
      townData[city] += Number(population);
    } else {
      townData[city] = Number(population);
    }
  }
  for (const [city, population] of Object.entries(townData)) {
    console.log(`${city} : ${population}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);

function townsToJson(input) {
  let arr = [];
  let result = {};
  let currLine = input.shift().slice(2, -2);
  let [Town, Latitude, Longitude] = currLine.split(" | ");
  result.Town, result.Latitude, result.Longitude;
  for (let line of input) {
    result = {};
    let currLine = line.slice(2, -2);
    let [city, num1, num2] = currLine.split(" | ");
    num1 = Number(num1).toFixed(2);
    num2 = Number(num2).toFixed(2);
    result[Town] = city;
    result[Latitude] = Number(num1);
    result[Longitude] = Number(num2);
    arr.push(result);
  }
  console.log(JSON.stringify(arr));
}
townsToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
townsToJson([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);

function solve(input) {
  let pattern = /([=/])[A-Z][A-Za-z][A-Za-z]+\1/g;
  let locations = input.match(pattern);
  let travelPoints = 0;
  let destination = "";

  if (locations !== null) {
    let pattern = /[A-Z][A-Za-z][A-Za-z]+/g;
    let toString = locations.toString();
    toString = toString.match(pattern);
    for (const el of toString) {
      travelPoints += el.length;
    }
    destination = toString.join(", ");
  }

  console.log(`Destinations: ${destination}`);
  console.log(`Travel Points: ${travelPoints}`);
}


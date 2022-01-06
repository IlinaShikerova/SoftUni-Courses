function adAstra(input) {
  let string = input.toString();
  let items = [];
  let needCalADay = 2000;
  let totalCal = 0;
  let pattern =
    /([#|])(?<itemName>[a-zA-Z\s]+)\1(?<exDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
  let match = pattern.exec(string);
  while (match != null) {
    items.push({ item: match[2], day: match[3], cal: match[4] });
    totalCal += Number(match[4]);
    match = pattern.exec(string);
  }
  console.log(
    `You have food to last you for: ${Math.floor(totalCal / 2000)} days!`
  );
  for (let i = 0; i < items.length; i++) {
    console.log(
      `Item: ${items[i].item}, Best before: ${items[i].day}, Nutrition: ${items[i].cal}`
    );
  }
}


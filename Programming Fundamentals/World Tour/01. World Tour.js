function solve(input) {
  let stops = input.shift();
  let travel = stops;

  for (const line of input) {
    let currentLine = line.split(":");
    let command = currentLine[0];
    if (command === "Add Stop") {
      let index = Number(currentLine[1]);
      let string = currentLine[2];
      let first = travel.substring(0, index);
      let second = travel.substring(index);
      travel = first + string + second;
    } else if (command === "Remove Stop") {
      let index1 = Number(currentLine[1]);
      let index2 = Number(currentLine[2]);
      if (
        index1 >= 0 &&
        index1 < travel.length &&
        index2 >= 0 &&
        index2 < travel.length
      ) {
        let removeStop = travel.substring(index1, index2 + 1);
        travel = travel.replace(removeStop, "");
      }
    } else if (command === "Switch") {
      let oldString = currentLine[1];
      let newString = currentLine[2];
      if (travel.includes(oldString)) {
        let splitted = travel.split(oldString);
        travel = splitted.join(newString);
      }
    } else if (command === "Travel") {
      console.log(`Ready for world tour! Planned stops: ${travel}`);
      break;
    }
    console.log(travel);
  }
}

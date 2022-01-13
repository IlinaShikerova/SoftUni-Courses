function addAndRemoveEl(commands) {
  let result = [];
  let currentNum = 0;
  for (let command of commands) {
    if (command === "add") {
      currentNum += 1;
      result.push(currentNum);
    } else {
      currentNum += 1;
      result.pop();
    }
  }
  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n"));
  }
}
addAndRemoveEl(["add", "add", "add", "add"]);
addAndRemoveEl(["add", "add", "remove", "add", "add"]);
addAndRemoveEl(["remove", "remove", "remove"]);

function listProcessor(input) {
  let result = [];
  for (let tokens of input) {
    let [command, string] = tokens.split(" ");
    if (command === "add") {
      add(string);
    } else if (command === "remove") {
      remove(string);
    } else if (command === "print") {
      print();
    }
  }
  function add(string) {
    result.push(string);
  }
  function remove(string) {
    if (result.includes(string)) {
      let index = result.indexOf(string);
      result.splice(index, 1);
    }
  }
  function print() {
    console.log(result.join(","));
  }
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);

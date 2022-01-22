function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let result = "<p>";
  let counter = 0;

  let text = input.split(".");
  const textL = text.length;
  if (textL <= 3) {
    result += input;
    output.innerHTML += result + "</p>";
  } else {
    for (let i = 0; i < textL; i++) {
      if (text[i] !== "") {
        if (counter === 3) {
          output.innerHTML += result + "</p>";
          result = "<p>";
          counter = 0;
          counter++;
          result += text[i] + ".";
        } else {
          counter++;
          result += text[i] + ".";
        }
      }
    }
  }
  if (counter !== 0) {
    output.innerHTML += result + "</p>";
  }
}

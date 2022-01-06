function solve(input) {
  let text = input.shift();
  let tokens = input.shift().split(" ");
  while (tokens != "Done") {
    let command = tokens[0];
    if (command === "TakeOdd") {
      let newPassword = "";
      let textL = text.length;
      for (let i = 0; i < textL; i++) {
        if (i % 2 != 0) {
          newPassword += text[i];
        }
      }
      text = newPassword;
      console.log(text);
    } else if (command === "Cut") {
      let index = Number(tokens[1]);
      let length = Number(tokens[2]);
      let cut = text.substring(index, index + length);
      text = text.replace(cut, "");
      console.log(text);
    } else if (command === "Substitute") {
      let substring = tokens[1];
      let substitute = tokens[2];
      if (text.includes(substring)) {
        text = text.split(substring).join(substitute);
        console.log(text);
      } else {
        console.log("Nothing to replace!");
      }
    }
    tokens = input.shift().split(" ");
  }
  console.log(`Your password is: ${text}`);
}


function secretChat(input) {
  let concealedMessage = input.shift();
  for (let i = 0; i < input.length; i++) {
    let operation = input[i].split(":|:");
    let command = operation[0];
    if (command === "Reveal") {
      console.log(`You have a new text message: ${concealedMessage}`);
      break;
    }
    if (command === "InsertSpace") {
      let index = operation[1];
      if (index >= 0 && index < concealedMessage.length) {
        let firstPart = concealedMessage.substring(0, index);
        let secondPart = concealedMessage.substring(index);
        concealedMessage = firstPart + " " + secondPart;
        console.log(concealedMessage);
      }
    } else if (command === "Reverse") {
      let substring = operation[1];
      if (concealedMessage.includes(substring)) {
        let index = concealedMessage.indexOf(substring);

        let secondPart = concealedMessage
          .substring(index, index + substring.length)
          .split("")
          .reverse()
          .join("");
        let firstPart = concealedMessage.substring(0, index);
        let thirdPart = concealedMessage.substring(index + substring.length);
        concealedMessage = firstPart + thirdPart + secondPart;
        console.log(concealedMessage);
      } else {
        console.log("error");
      }
    } else if (command === "ChangeAll") {
      let substring = operation[1];
      let replacement = operation[2];
      concealedMessage = concealedMessage.split(substring).join(replacement);
      console.log(concealedMessage);
    }
  }
}

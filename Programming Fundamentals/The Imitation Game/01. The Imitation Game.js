function solve(input) {
  let encryptedMessage = input.shift();
  for (const line of input) {
    let operation = line.split("|");
    let command = operation[0];
    switch (command) {
      case "ChangeAll":
        let substring = operation[1];
        let replacement = operation[2];
        encryptedMessage = encryptedMessage.split(substring).join(replacement);
        break;
      case "Insert":
        let index = Number(operation[1]);
        let value = operation[2];
        let firstPart = encryptedMessage.substring(0, index);
        let secondPart = encryptedMessage.substring(index);
        encryptedMessage = firstPart + value + secondPart;
        break;
      case "Move":
        let n = Number(operation[1]);
        let firstNLetters = encryptedMessage.substring(0, n);
        let secondLetters = encryptedMessage.substring(n);
        encryptedMessage = secondLetters + firstNLetters;
        break;
      case "Decode":
        console.log(`The decrypted message is: ${encryptedMessage}`);
        break;
    }
  }
}


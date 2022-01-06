function solve(input) {
  let string = input.toString();
  let mirrorWord = [];
  let pattern =
    /([@#])([a-zA-z][a-zA-z][a-zA-z]+)\1\1([a-zA-z][a-zA-z][a-zA-z]+)\1/g;
  let match = string.match(pattern);
  if (match != null) {
    console.log(`${match.length} word pairs found!`);
  } else {
    console.log(`No word pairs found!`);
    console.log(`No mirror words!`);
    return;
  }
  for (const el of match) {
    let pattern = /[^#@]/g;
    let wordPairs = el;
    let match = wordPairs.match(pattern);
    match = match.join("");
    let firstPartL = match.length / 2;
    let firstPart = match.substring(0, firstPartL);
    let secondPart = match.substring(firstPartL);
    let reverse = secondPart.split("").reverse().join("");
    if (firstPart === reverse) {
      let current = firstPart + " <=> " + secondPart;
      mirrorWord.push(current);
    }
  }
  if (mirrorWord.length > 0) {
    console.log("The mirror words are:");
    console.log(mirrorWord.join(", "));
  } else {
    console.log(`No mirror words!`);
  }
}


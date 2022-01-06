function solve(input) {
  let numberOfPiece = Number(input.shift());
  let catalog = {};
  for (let i = 0; i < numberOfPiece; i++) {
    let [piece, composer, key] = input[i].split("|");
    catalog[piece] = {
      composer,
      key,
    };
  }
  while (input[0] != "Stop") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let piece = tokens[1];

    if (command === "Add") {
      let composer = tokens[2];
      let key = tokens[3];
      add(piece, composer, key);
    } else if (command === "Remove") {
      remove(piece);
    } else if (command === "ChangeKey") {
      let newKey = tokens[2];
      changeKey(piece, newKey);
    }
  }
  let sorted = Object.entries(catalog).sort(comparePieces);
  function comparePieces(a, b) {
    let pieceA = a[0];
    let pieceB = b[0];

    let composerA = a[1].composer;
    let composerB = b[1].composer;

    return pieceA.localeCompare(pieceB) || composerA.localeCompare(composerB);
  }

  function add(piece, composer, key) {
    if (catalog[piece]) {
      console.log(`${piece} is already in the collection!`);
    } else {
      catalog[piece] = {
        composer,
        key,
      };
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    }
  }
  function remove(piece) {
    if (catalog[piece] === undefined) {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    } else {
      delete catalog[piece];
      console.log(`Successfully removed ${piece}!`);
    }
  }
  function changeKey(piece, newKey) {
    if (catalog[piece] === undefined) {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    } else {
      catalog[piece].key = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`);
    }
  }
  for (let [piece, composer] of sorted) {
    console.log(
      `${piece} -> Composer: ${composer.composer}, Key: ${composer.key}`
    );
  }
}


function solve(input) {
  let barcodeCount = Number(input.shift());
  let toString = input.toString();
  let pattern = /(@#+)([A-Z][a-zA-Z0-9]{4,}[A-Z])\1/g;
  let match = toString.match(pattern);
  for (let i = 0; i < barcodeCount; i++) {
    if (match.includes(input[i])) {
      let pattern = /[0-9]/g;
      let match = input[i].match(pattern);
      let productGroup;
      if (match === null) {
        productGroup = "00";
      } else {
        productGroup = match.join("");
      }
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}


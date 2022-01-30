function attachEventsListeners() {
  let input = document.getElementById("inputDistance");
  let output = document.getElementById("outputDistance");
  let inputUnits = document.getElementById("inputUnits");
  let outputUnits = document.getElementById("outputUnits");
  let convertButton = document
    .getElementById("convert")
    .addEventListener("click", onClick);

  function onClick() {
    let result = 0;
    let currentResult = 0;
    switch (inputUnits.value) {
      case "km":
        currentResult = input.value * 1000;
        break;
      case "m":
        currentResult = input.value * 1;
        break;
      case "cm":
        currentResult = input.value * 0.01;
        break;
      case "mm":
        currentResult = input.value * 0.001;
        break;
      case "mi":
        currentResult = input.value * 1609.34;
        break;
      case "yrd":
        currentResult = input.value * 0.9144;
        break;
      case "ft":
        currentResult = input.value * 0.3048;
        break;
      case "in":
        currentResult = input.value * 0.0254;
        break;
    }
    switch (outputUnits.value) {
      case "km":
        result = currentResult / 1000;
        break;
      case "m":
        result = currentResult;
        break;
      case "cm":
        result = currentResult / 0.01;
        break;
      case "mm":
        result = currentResult / 0.001;
        break;
      case "mi":
        result = currentResult / 1609.34;
        break;
      case "yrd":
        result = currentResult / 0.9144;
        break;
      case "ft":
        result = currentResult / 0.3048;
        break;
      case "in":
        result = currentResult / 0.0254;
        break;
    }
    output.disabled = false;
    output.value = result;
  }
}

function solve() {
  const text = document.getElementById("text").value;
  const namingConvention = document.getElementById("naming-convention").value;
  let result = "";
  let words = text.split(" ");
  const wordsL = words.length;

  if (namingConvention === "Camel Case") {
    for (let i = 0; i < wordsL; i++) {
      if (i === 0) {
        result += words[i].toLowerCase();
      } else {
        result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
    }
    document.getElementById("result").textContent = result;
  } else if (namingConvention === "Pascal Case") {
    for (let i = 0; i < wordsL; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    document.getElementById("result").textContent = result;
  } else {
    document.getElementById("result").textContent = "Error!";
  }
}

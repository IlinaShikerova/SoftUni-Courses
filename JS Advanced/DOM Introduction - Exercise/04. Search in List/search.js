function search() {
  let towns = Array.from(document.querySelectorAll("ul li"));
  let search = document.getElementById("searchText").value;
  let result = document.getElementById("result");
  let matches = 0;
  for (let town of towns) {
    let currentTown = town.innerHTML.toLowerCase();
    if (currentTown.includes(search.toLowerCase())) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    } else {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "";
    }
  }
  result.textContent = `${matches} matches found`;
}

function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let students = Array.from(document.querySelectorAll("tbody tr"));
    let search = document.getElementById("searchField").value.toLowerCase();

    students.forEach((el) => {
      let currentEl = el.textContent.toLowerCase();
      if (currentEl.includes(search)) {
        el.classList.add("select");
      } else {
        el.classList.remove("select");
      }
    });
    search.value = "";
  }
}

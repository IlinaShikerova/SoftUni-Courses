function addItem() {
  let newText = document.getElementById("newItemText");
  let list = document.createElement("li");
  list.textContent = newText.value;
  let button = document.createElement("a");
  button.href = "#";
  button.textContent = "[Delete]";
  button.addEventListener("click", removeEl);
  list.appendChild(button);
  document.getElementById("items").appendChild(list);

  newText.value = "";
  function removeEl(ev) {
    let parent = ev.target.parentNode;
    parent.remove();
  }
}

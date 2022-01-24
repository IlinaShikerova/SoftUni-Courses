function addItem() {
  let newText = document.getElementById("newItemText").value;
  let list = document.createElement("li");
  list.appendChild(document.createTextNode(newText));
  document.getElementById("items").appendChild(list);

  document.getElementById("newItemText").value = "";
}

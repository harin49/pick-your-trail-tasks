
var inputField = document.getElementById("input-container");
var insertButton = document.getElementById("insert-button");
var listContainer = document.getElementById("list-container");

insertButton.onclick = sampleFunction;

function sampleFunction() {
  if (inputField.value) {
    createList(inputField.value);
  } else {
    alert("empty not allowed, enter something");
  }
}

function createList(itemToInsert) {
  var listItem = document.createElement("div");
  listItem.innerHTML = itemToInsert;
  listItem.className = "list-items";
  listContainer.appendChild(listItem);
}

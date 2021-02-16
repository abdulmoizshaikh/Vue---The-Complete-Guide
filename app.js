const input = document.getElementById("input");
const btn = document.getElementById("addGoalBtn");
const list = document.getElementById("list");

btn.addEventListener("click", function () {
  const value = input.value;
  const listItem = document.createElement("LI");
  listItem.textContent = value;
  list.append(listItem);
  input.value = "";
});

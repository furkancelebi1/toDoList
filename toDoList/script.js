let addToDoButton = document.getElementById("addToDo");
let toDoConteiner = document.getElementById("toDoConteiner");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");
addToDoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");

  paragraph.classList.add("paragraph-styling");

  toDoConteiner.appendChild(paragraph);

  paragraph.innerHTML = inputText.value;

  inputText.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    toDoConteiner.removeChild(paragraph);
  });

  clearToDo.addEventListener("click", function () {
    paragraph.remove();
  });
});

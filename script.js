const todo_form = document.querySelector(".form-todo");
const todo_input = document.querySelector(".form-todo input[type='text']");
const todo_list = document.querySelector(".todo-list");

todo_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todo_input.value;
  const newList = document.createElement("li");
  const newInnerHtml = `
  <span class="text">${newTodoText}</span>
  <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`;
  newList.innerHTML = newInnerHtml;
  todo_list.append(newList);
  todo_input.value = "";
});

todo_list.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const targetList = e.target.parentNode.parentNode;
    targetList.remove();
  }
  if (e.target.classList.contains("done")) {
    const spanLi = e.target.parentNode.previousElementSibling;
    spanLi.style.textDecoration = "line-through";
  }
});

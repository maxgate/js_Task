
const schedule = document.getElementById("mov");

function createTodosStoragse() {
  const item = localStorage.getItem("todos");
  if (!item) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
}

schedule.addEventListener("click", function () {
  createTodosStoragse();

  // Save titleMe and message in localStorage
  const todos = localStorage.getItem("todos");
  const todoArray = JSON.parse(todos);
  const title = document.getElementById("exampleFormControlInput1").value;
  const note = document.querySelector(".note").value;
  const newTodoArray = [
    ...todoArray,
    { time_manager_message: note, time_manager_title: title },
  ];
  localStorage.setItem("todos", JSON.stringify(newTodoArray));
  // localStorage.setItem("time_manager_message", JSON.stringify(message));
  // localStorage.setItem("time_manager_title", JSON.stringify(titleMe));

  // Retrieve from localStorage

  window.location.href = "./index.html";
});

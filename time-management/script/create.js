const createSchedule = (item) => {
  const displaySchedule = document.querySelector(".display");
  const html = `
  <div class="container-fluid justify-content-around small">
          <div
            class="col-2 rounded-top shadow text-center text-light pt-1 pb-1"
            style="background-color: #6664c2"
          >
          
            ${item.time_manager_title}
          </div>
          <div class="col-2 bg-light rounded-bottom shadow text-center small pt-3 pb-2">
            ${item.time_manager_message}
          </div>
        </div>
`;

  displaySchedule.insertAdjacentHTML("beforeEnd", html);
};

function createTodosStoragse() {
  const item = localStorage.getItem("todos");
  if (!item) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
}

function createNewSchedule() {
  createTodosStoragse();

  const todos = localStorage.getItem("todos");
  JSON.parse(todos).forEach((item) => {
    createSchedule(item);
  });
}

createNewSchedule();

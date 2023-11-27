const createSchedule = (item) => {
  const displaySchedule = document.querySelector(".display");
  const html = `
  <section>
    <div class="container-fluid mx-5 justify-content-around small">
      <div class="col-2 rounded-top shadow text-center text-light pt-1 pb-1" style="background-color:   #6664c2">
        ${item.time_manager_title}
      </div>
    </div>
    <!--  -->
    <div class=" container-fluid mx-5 text-center small fst-italic justify-content-around">
        <div class="col-2 bg-light rounded-bottom shadow small pt-3 pb-2">
          ${item.time_manager_message}
        </div>
    </div>
</section>`;

  displaySchedule.insertAdjacentHTML("afterend", html);
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

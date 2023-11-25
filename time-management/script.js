const schedule = document.getElementById("mov");
const title = document.getElementById("exampleFormControlInput1");
const note = document.querySelector(".note");
const displaySchedule = document.querySelector(".display");
// console.log(note, title);

// const displaySchedule = document.querySelector(".display");
// const fetchData = localStorage.getItem("time_manager");
// let previous_data = JSON.parse(fetchData);

// if (fetchData) {
//   //   console.log(previous_data);
//   previous_data.map((data, index) => {
//     document.querySelector(".container-fluid").innerHTML += `
//             <div class="container-fluid row d-flex justify-content-around small">
//             <div
//           class="col-2 rounded-top shadow text-center text-light pt-1 pb-1"
//           style="background-color: #6664c2"
//         >
//           ${data.title}
//         </div>
//         </div>
//         <div class="container-fluid row d-flex justify-content-around small">
//         <div
//           class="col-2 rounded-top shadow text-center text-light pt-1 pb-1"
//           style="background-color: #6664c2"
//         >
//           ${data.note}
//         </div>
//         </div>
//             `;
//   });
// }

//
//   console.log(title.value);

//   const dataArry = [];
//   const data = {
//     title: title.value,
//     note: note.value,
//   };

//   dataArry.push(data);

//   if (!localStorage.getItem("time_manager")) {
//     localStorage.setItem(
//       "time_manager",
//       JSON.stringify([{ title: "title", note: "note" }])
//     );
//   }
//   previous_data.push(data);
//   console.log(previous_data);
//   localStorage.setItem("time_manager", JSON.stringify(previous_data));

const titleMe = title.value;
const message = note.value;

const createSchedule = () => {
  const html = `<section>
            <div class="container-fluid row d-flex justify-content-around small">
              <div
                class="col-2 rounded-top shadow text-center text-light pt-1 pb-1"
                style="background-color: #6664c2"
              >
                ${titleMe}
              </div>
              <!--  -->
            <div
              class="container-fluid row d-flex text-center small fst-italic justify-content-around"
            >
              <div class="col-2 bg-light rounded-bottom shadow small pt-3 pb-2">
                ${message}
              </div>`;

  schedule.insertAdjacentHTML("afterend", html);
  //   console.log("createSchedule");
};

schedule.addEventListener("click", function () {
  window.location.href = "./index.html";
  createSchedule();

  titleMe = displaySchedule.value;
  message = displaySchedule;
  displaySchedule = this.innerHTML;
});

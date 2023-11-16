const principalInput = document.querySelector(".principal_input");
const calculate = document.querySelector(".cal");
const interestInput = document.querySelector(".interest_input");
const termInput = document.querySelector(".term_input");
const display = document.querySelector(".screen");
const clear = document.querySelector(".clear");

const simpleInt = () => {
  // let p, i, t;
  // principalInput.value = p;
  // interestInput.value = i;
  // termInput.value = t;
  return Number(
    (principalInput.value * interestInput.value * termInput.value) / 100
  );
};

const clearScreen = clear.addEventListener("click", function () {
  console.log("cleared");
  principalInput.value = "";
  interestInput.value = "";
  termInput.value = "";
  display.value = "";
});

calculate.addEventListener("click", (e) => {
  display.value = simpleInt();
});

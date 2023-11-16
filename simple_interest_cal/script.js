"use strict";

const principalInput = document.querySelector(".principal_input");
const calculate = document.querySelector(".cal");
const interestInput = document.querySelector(".interest_input");
const termInput = document.querySelector(".term_input");
// document.querySelector("");
const clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
  console.log("cleared");
  principalInput.value = "";
  interestInput.value = "";
  termInput.value = "";
});

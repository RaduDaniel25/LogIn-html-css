"use strict";

// const btnLogIn = document.querySelector(".login");
// const btnSingUp = document.querySelector(".signup");
// const labelSign = document.querySelector(".signup label");
// const labelLog = document.querySelector(".login label");

// btnLogIn.addEventListener("click", function () {
//   btnLogIn.style.transform = "translateY(-500px)";
//   labelSign.style.transform = "scale(0.6)";
//   labelLog.style.transform = "scale(1)";
// });

// btnSingUp.addEventListener("click", function () {
//   btnLogIn.style.transform = "translateY(-180px)";
//   labelLog.style.transform = "scale(0.6)";
//   labelSign.style.transform = "scale(1)";
// });

const btnPrimarySingUp = document.querySelector(".btn-primary");
const mainPopup = document.querySelector(".main");
const overlay = document.querySelector(".overlay");

const closeLogIn = function () {
  mainPopup.classList.add("hidden");
  btnPrimarySingUp.classList.remove("hidden");
  overlay.classList.add("hidden");
};

const openLogIn = function () {
  btnPrimarySingUp.classList.add("hidden");
  mainPopup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !mainPopup.classList.contains("hidden")) {
    closeLogIn();
  }
});
btnPrimarySingUp.addEventListener("click", openLogIn);
overlay.addEventListener("click", closeLogIn);

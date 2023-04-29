"use strict";

const collapseCurtainButton = document.querySelector("#curtain-button");
const curtainText = document.querySelector(".curtain-text");
const curtainHero = document.querySelector(".curtain-hero");
const curtain = document.querySelector("#curtain");

// Automatically open 'curtain' - DELETE LATER
// window.onload = function () {
//   curtainHero.classList.add("collapsed");
//   curtainText.classList.add("collapsed");
// };

// Uncomment to enable button click to remove 'curtain'
collapseCurtainButton.addEventListener("click", (e) => {
  curtainHero.classList.add("collapsed");
  curtainText.classList.add("collapsed");
});

curtainText.addEventListener("transitionend", () => {
  curtainHero.remove();
  curtain.remove();
  const getBody = document.querySelector("body");
  const getHtml = document.querySelector("html");
  getBody.classList.remove("overflow-hide");
  getBody.style.height = "unset";
  getHtml.classList.remove("overflow-hide");
});

"use strict";

function updateScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const screenSizeDisplay = document.getElementById("screen-size-display");
  screenSizeDisplay.innerHTML = width + "x" + height;
}

window.addEventListener("resize", updateScreenSize);

updateScreenSize();

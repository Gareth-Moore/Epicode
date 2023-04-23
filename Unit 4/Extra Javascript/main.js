"use strict";

// DISABLED TO STOP SPAMMING API CALLS
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then((data) => data.products)
//   .then((products) => {
//     getProducts(products);
//     const newHTMLElement = document.createElement("div");
//     let newHTMLContent = "";

//     // loop for creating HTML elements
//     products.forEach((item) => {
//       newHTMLContent += `
//         <li>Product name: ${item.title}</li>
//         <img src="${item.images[0]}" alt="Image of ${products.title}">
//         `;
//     });

//     // append new HTML elements
//     newHTMLElement.innerHTML = newHTMLContent;
//     const main = document.querySelector("main");
//     main.appendChild(newHTMLElement);
//   })
//   .catch((err) => console.log(err));

// let products = {};
// function getProducts(onj) {
//   products = onj;
// }


const showPageButton = document.querySelector('#show-page-btn')
const collapseToLeft = document.querySelector('.landing-description')
const collapseToRight = document.querySelector('.landing-hero-image')
window.onload = function () {
}

showPageButton.addEventListener('click', e => {
  showPageButton.classList.add('fade')
  collapseToLeft.classList.add('collapsed')
  collapseToRight.classList.add('collapsed')
})

showPageButton.addEventListener('transitionend', () => {
  showPageButton.remove();
})
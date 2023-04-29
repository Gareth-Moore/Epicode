"use strict";

const END_POINT = "https://dummyjson.com/products";
let productsArr = []; // Data for cart functionality

async function fetchData() {
  try {
    const response = await fetch(END_POINT);
    const { products } = await response.json();
    renderProducts(products);
  } catch (error) {
    fetchError(error);
  }
}
fetchData();

function renderProducts(products) {
  // Store products object
  productsArr = Object.values(products);

  // Get product container from DOM
  const getProductContainer = document.querySelector(".product-container");

  // Create new 'product-card' div elements and populate with API data, then append to 'product-container'
  for (const key in products) {
    const item = products[key];
    const newProductCard = document.createElement("div");
    newProductCard.classList.add("product-card");
    newProductCard.dataset.id = item.id;
    newProductCard.innerHTML = `
      <div class="product-card-image">
        <img
          src="${item.images[0]}"
          alt=""
        />
      </div>
      <div class="product-card-content">
        <div class="info">
          <span class="title">${item.title}</span>
          <div class="rating">
            <img
              class="rating-star-img"
              src="./assets/rating-fill.svg"
              alt=""
            />
            <img
              class="rating-star-img"
              src="./assets/rating-${item.rating > 1 ? "fill" : "empty"}.svg"
              alt=""
            />
            <img
              class="rating-star-img"
              src="./assets/rating-${item.rating > 2 ? "fill" : "empty"}.svg"
              alt=""
            />
            <img
              class="rating-star-img"
              src="./assets/rating-${item.rating > 3 ? "fill" : "empty"}.svg"
              alt=""
            />
            <img
              class="rating-star-img"
              src="./assets/rating-${item.rating > 4 ? "fill" : "empty"}.svg"
              alt=""
            />
            <span>(${item.rating})</span>
          </div>
          <p class="description">
            ${item.description}
          </p>
        </div>
        <div class="price-container">
          <p class="price">${item.price}<sup>00</sup></p>
          <p class="discount">Discounted by <span>${
            item.discountPercentage
          }%</span></p>
        </div>

        <div class="action-buttons">
          <button class="more-info" onClick="fetchMoreInfo(${
            item.id
          })">More Info</button>
          <button class="add-to-cart" onClick="addToCart(${
            item.id
          })">Add to Cart</button>
        </div>
      </div>
      `;
    getProductContainer.appendChild(newProductCard);
  }
  const footer = document.createElement("footer");
  footer.innerHTML = `<a href="#top">Go to top</a>`;
  getProductContainer.insertAdjacentElement("afterend", footer);

  // Removes :focus from a button once clicked
  buttonAddAnimation();
}

function buttonAddAnimation() {
  // get all page buttonss
  const buttons = document.getElementsByClassName("add-to-cart");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      buttons[i].classList.add("button-click-indicator");
      buttons[i].innerHTML = "Item Added!";
      setTimeout(() => {
        buttons[i].classList.remove("button-click-indicator");
        buttons[i].innerHTML = "Add to Cart!";
      }, 700);
    });
  }
}

function fetchError(error) {
  const getProductContainer = document.querySelector(".product-container");
  const displayError = document.createElement("div");
  displayError.classList.add("product-card");
  displayError.innerHTML = `
        <div class="product-card-image">
          <img
            src="./assets/logo.png"
            alt=""
          />
        </div>
        <div class="product-card-content">
          <div class="info">
            <span class="title">Woopsie!</span>

            <p class="description" style="font-size: 0.9rem; font-style: italic; max-height: unset;">
              This is what went wrong: ${error}
            </p>
            <p>I know you don't understand it, but it's gonna be alright. <br><strong>Please reload the page or try again later! My bad, dude!</strong> 
          </div>
        </div>
        `;
  getProductContainer.appendChild(displayError);
}

// Pass URL to 'more information' page
function fetchMoreInfo(id) {
  const url = `more-info.html?id=${id}`;
  window.location.href = url;
}

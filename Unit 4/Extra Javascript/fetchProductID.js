"use strict";

// retreive product via ID
// ID passed in URL
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const id = urlParams.get("id");
const END_POINT = "https://dummyjson.com/products";
fetchProductByID(id);

async function fetchProductByID(id) {
  try {
    const response = await fetch(END_POINT + `/${id}`);
    const product = await response.json();
    renderProductByID(product);
  } catch (error) {
    fetchError(error);
  }
}

function renderProductByID(product) {
  // get product details container
  const productDetailsContainer = document.querySelector(
    ".product-details-container"
  );

  // create product.images to add to HTML template
  console.log(product.images.length);
  let imagesContainer = "";
  for (let i = 0; i < product.images.length; i++) {
    imagesContainer += `<img src="${product.images[i]}" style="max-width: 100px; max-height: 100px" alt=""/>`;
  }

  //   HTML template for product details
  productDetailsContainer.innerHTML = `
    <div class="grid-item grid-item-name">ID:</div>
    <div class="grid-item grid-item-info">${product.id}</div>
    <div class="grid-item grid-item-name">Title:</div>
    <div class="grid-item grid-item-info">${product.title}</div>
    <div class="grid-item grid-item-name">Thumbnail:</div>
    <div class="grid-item grid-item-info">
        <img
            src="${product.thumbnail}"
            style="max-width: 100px; max-height: 100px"
            alt=""
        />
    </div>
    <div class="grid-item grid-item-name">Images:</div>
    <div class="grid-item grid-item-info">
        ${imagesContainer}
    </div>
    <div class="grid-item grid-item-name">Brand:</div>
    <div class="grid-item grid-item-info">${product.brand}</div>
    <div class="grid-item grid-item-name">Category:</div>
    <div class="grid-item grid-item-info">${product.category}</div>
    <div class="grid-item grid-item-name">Description:</div>
    <div class="grid-item grid-item-info">${product.description}</div>
    <div class="grid-item grid-item-name">Discount %:</div>
    <div class="grid-item grid-item-info">${product.discountPercentage}%</div>
    <div class="grid-item grid-item-name">Price:</div>
    <div class="grid-item grid-item-info">$${product.price}</div>
    <div class="grid-item grid-item-name">Rating:</div>
    <div class="grid-item grid-item-info">${product.rating}</div>
    <div class="grid-item grid-item-name">In Stock:</div>
    <div class="grid-item grid-item-info">${product.stock}</div>
    `;
}

function fetchError(error) {
  const productDetailsContainer = document.querySelector(
    ".product-details-container"
  );
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
  productDetailsContainer.appendChild(displayError);
}

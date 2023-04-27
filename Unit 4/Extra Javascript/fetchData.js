"use strict";

const END_POINT = "https://dummyjson.com/products";
URLSearchParams; //What is this? Investigate?

window.onload = fetchData; // comment out if you don't want the Fetch request to run

// Fetch request and populate products page
function fetchData() {
  fetch(END_POINT)
    .then((response) => response.json())
    .then((data) => {
      return data.products;
    })
    .then((products) => {
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
            <p class="discount">Discounted by ${item.discountPercentage}%</p>
          </div>

          <div class="action-buttons">
            <button class="more-info">More Info</button>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        </div>
        `;
        getProductContainer.appendChild(newProductCard);
      }
      return getProductContainer;
    })
    .then((getProductContainer) => {
      // Create footer element
      const footer = document.createElement("footer");
      footer.innerHTML = `<a href="#top">Go to top</a>`;
      getProductContainer.insertAdjacentElement("afterend", footer);
    })
    .catch(() => {
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
            <span class="title">Oops!</span>

            <p class="description" style="font-size: 1rem;">
              It would appear that something has gone wrong! Please reload the page.
            </p>
          </div>
        </div>
        
        `;
      getProductContainer.appendChild(displayError);
    });
}

/* const END_POINT = "https://dummyjson.com/products";

const dataFetched = async () => {
  const data = await fetch(END_POINT).then(console.log("Data Fetched"));
  // RUNNING LOADING SCREEN
  console.log(data);
  console.log("Outside Fetching...");
};

dataFetched();

// Get the DOM elements for the loading animation and the results display
const loadingAnimation = document.getElementById("loading-animation");
const resultsDisplay = document.getElementById("results-display");

async function fetchData() {
  // Display the loading animation
  loadingAnimation.style.display = "block";
  // Hide the results display
  resultsDisplay.style.display = "none";

  try {
    // Make the API call using fetch() and await the response
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();

    // Update the UI with the results
    resultsDisplay.textContent = JSON.stringify(data);
    // Hide the loading animation
    loadingAnimation.style.display = "none";
    // Display the results display
    resultsDisplay.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

// Call the fetchData function to make the API call
fetchData(); */

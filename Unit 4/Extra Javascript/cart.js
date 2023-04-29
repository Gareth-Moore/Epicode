"use strict";

/* 
      What needs to happen:
          Click to add item to cart
              > does HTML cart element exist?
                  (NO) create new HTML element
                  (YES) update already existing HTML element
              > update total price

          Click the + sign in cart
              > update already existing HTML element (+1)
              > update total price

          Click the - sign in cart
              > Will the item amount go to 0?
                  (YES) remove HTML element
                  (NO) update already existing HTML element (-1)
              > update total price
  */

const modalBody = document.querySelector(".modal-body");

function addToCart(id) {
  const getCartItems = modalBody.children;
  let itemExists = checkIfItemExists(id, getCartItems);

  if (itemExists) {
    updateItem(id, 1);
  } else {
    createNewItem(id);
  }
}

function checkIfItemExists(id, getCartItems) {
  // if item exists return TRUE, else FALSE
  for (let i = 0; i < getCartItems.length; i++) {
    if (getCartItems[i].getAttribute("id") === `modal-item-${id}`) {
      return true;
    }
  }
  return false;
}

function createNewItem(id) {
  // Create parent element - new cart item
  const newItem = document.createElement("div");

  newItem.classList.add("d-flex", "justify-content-between");
  newItem.setAttribute("id", `modal-item-${id}`);
  newItem.dataset.price = productsArr[id - 1].price;
  newItem.dataset.itemCount = 1;
  newItem.dataset.totalPrice = Math.trunc(
    newItem.dataset.price * newItem.dataset.itemCount
  );

  // Insert content into cart item
  newItem.innerHTML = `
    <p id="modal-item-${id}-title" class="mt-2 mb-2">${
    productsArr[id - 1].title
  }</p>
    <div class="add-remove-cart d-flex align-items-center" style="width: fit-content;">
        <button class="add-remove-btn" onClick="checkToRemoveItem(${id})">-</button>
        <button class="add-remove-btn ml-1" onClick="updateItem(${id}, 1)">+</button>
        <p class="mt-2 mb-2 ml-2">x
            <span id="modal-item-${id}-itemCount" data-item-count='1'>${
    newItem.dataset.itemCount
  }</span>&nbsp;&nbsp;$
            <span id="modal-item-${id}-itemTotal">${
    newItem.dataset.totalPrice
  }</span>
        </p>
    </div>
 `;

  modalBody.insertBefore(newItem, modalBody.firstChild);

  updateTotalPrice();
}

function updateItem(id, increment) {
  let currentItem = Array.prototype.find.call(modalBody.children, (element) => {
    return element.getAttribute("id") === `modal-item-${id}`;
  });

  let itemCount = Number(currentItem.dataset.itemCount) + increment;
  let itemPrice = Number(currentItem.dataset.price);

  const itemCountSpan = document.getElementById(`modal-item-${id}-itemCount`);
  const itemTotalPriceSpan = document.getElementById(
    `modal-item-${id}-itemTotal`
  );

  currentItem.dataset.itemCount = itemCount;

  itemCountSpan.innerHTML = itemCount;
  itemTotalPriceSpan.innerHTML = itemCount * itemPrice;

  updateTotalPrice();
}

function checkToRemoveItem(id) {
  const currentItem = Array.prototype.find.call(
    modalBody.children,
    (element) => {
      if (element.getAttribute("id") === `modal-item-${id}`) return true;
    }
  );

  const currentItemCount = Number(currentItem.dataset.itemCount);
  if (currentItemCount === 1) {
    removeItem(id);
  } else {
    updateItem(id, -1);
  }
}

function removeItem(id) {
  const itemToRemove = Array.prototype.find.call(
    modalBody.children,
    (element) => {
      if (element.getAttribute("id") === `modal-item-${id}`) return true;
    }
  );
  itemToRemove.remove();
  updateTotalPrice();
}

function updateTotalPrice() {
  // modal-total-price
  let totalPrice = 0;
  const getAllCartItems = modalBody.children;
  for (let i = 0; i < getAllCartItems.length; i++) {
    if (getAllCartItems[i].getAttribute("id") !== "cart-total") {
      totalPrice +=
        parseInt(getAllCartItems[i].dataset.price) *
        parseInt(getAllCartItems[i].dataset.itemCount);
    }
  }
  const updateTotalPriceSpan = document.getElementById("modal-total-price");
  updateTotalPriceSpan.innerHTML = totalPrice;
}

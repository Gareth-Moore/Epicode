'use strict'
//Shopping cart and ambassadors - BuildTime #2

/*
Details:    Today you are in charge of building the shopping cart logic for a website that supports ambassadors. 
            Your job is to build a program flow that will elaborate a list of prices, a user and a shipping cost to calculate the correct cart total. 

            If the user is an ambassador, the cart should be discounted of 30% BEFORE shipping cost (ambassadors still pay shipping)
            If the user is NOT an ambassador, the cart should NOT be discounted
            Either way, if the cart goes over 100, shipping cost should be 0.

            Some users as examples are already provided.
*/



const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};


const [priceLess100, priceMore100] = [[34, 5, 2],[29, 48, 102, 14]];
const shippingCost = 50;
/*
calculate price 
apply discount if ambassador
add shipping price if cart > 100
print final price
 */
function checkout (user_object, price_array) {
  const ambassador_discount = user_object.isAmbassador === true ? true : false;
  let cart = 0;
  for (let i = 0; i < price_array.length; i++) {
    cart += price_array[i];
  }
  if (ambassador_discount) {
    console.log(`Hello Ambassador, we have applied a 30% discount to your $${cart} purchase. Your new total is $${cart * 0.7}!`)
    cart = cart * 0.7;
  }
  let totalPrice;
  if (cart > 100) {
    totalPrice = cart;
    console.log(`Your total, without shipping, is $${cart}.`)
  } else {
    totalPrice = cart + shippingCost;
    console.log(`Your cart is $${cart} plus shipping of $${shippingCost} which comes to a total of $${totalPrice} `)
  }
  console.log(totalPrice)
}
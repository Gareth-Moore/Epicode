// Additional assignments for M2-W3-P1

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

function checkArray () {
    const arr = giveMeRandom(prompt("Please input how many random numbers you'd like:"));
    if (arr === "NaN") {
        return;
    }
    let sumOfBiggerNumbers = 0;
    arr.forEach(value => {
        if (value > 5) {
            console.log(`${value} is bigger than 5.`)
            sumOfBiggerNumbers += value;
        } else {
            console.log(`${value} is NOT bigger than 5.`)
        }
    });
}

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

// I cannot find the eCommerce object

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

// I cannot find the eCommerce object

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

// I cannot find the eCommerce object

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

// I cannot find the eCommerce object

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

function loopUntil (x) {};

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

// copy this array if you'd like
let average_array_example = [1, 5, 2, 6, 3, 'Hi', 6, 7, 10]

function average (arr) {
    let [sum, entries] = [0, 0];
    arr.forEach(value => {
        if (isNaN(value)) {}
        else {
            sum += value;
            entries++;
        };
    });
    return sum / entries;
}

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/
const string_longest_example = [
    'Cheese',
    'Pizza',
    'Supercalafragicexpialadoshis',
    'What was that?'
]

function longest (strArr) {
    let longestString = "";
    strArr.forEach(value => {
        if (value.length > longestString.length) {
            longestString = value;
        }
    });
    console.log(longestString)
}

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

function spamFilter (emailContent) {
    if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) return false;
    return true;
}

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/



/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator (x, y) {
}

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

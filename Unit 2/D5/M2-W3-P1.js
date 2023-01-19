/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function calc_area (l1, l2) {
    return console.log(`The area of the rectangle is ${l1 * l2}.`)
}

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum (int1, int2) {
    let result = int1 + int2;
    if (int1 === int2) return result * 3; 
    else return result;
}

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff (num) {
    if (num > 19) {
        return (num - 19) * 3;
    } else return 19 - num;
}

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary (n) {
    if ((n >= 20 && n <= 100) || n === 400) return true;
    else {return false};
}

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify (str) {
    if (str.includes("Strive")) return str;
    else {return "Strive" + str}
}

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7 (posNum) {
    if (posNum <=0) return "Not a positive number";
    else {
        let response = "";
        if (posNum % 3 === 0) response += `${posNum} is a multiple of 3. `;
        if (posNum % 7 === 0) response += `${posNum} is a multiple of 7.`;
        console.log(response);
    }
}

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reversesString (str) {
    let response = '';
    for (let i = 0; i < str.length; i++) {
        response += str[str.length - i - 1]
    }
    console.log(response)
}

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst (str) {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        result += str[i]
    }
    console.log(result)
}

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString (str) {
    return str.slice(1, str.length - 1);
}

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
// between 0 and 10 meaning 1 to 9?
function giveMeRandom (n) {
    if (isNaN(n) || n <= 0) {
        console.log("Sorry that is not a valid number or is less than or equal to 0.");
        return "NaN";
    }
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(Math.ceil(Math.random() * 9))
    }
    console.log(arr)
    return arr;
}

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

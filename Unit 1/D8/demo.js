// declaration without assignment
// by the way - this is a single line comment
let myVar;

// console.log(myVar);

// myVar = 120;
// console.log(myVar);
// myVar = "my string";
// console.log(myVar);

const PiNumber = 3.14;

let operand1 = 240;
let operand2 = 120;

const sum = operand1 + operand2;
const diff = operand1 - operand2;
const product = operand1 * operand2;
const division = operand1 / operand2;

// operand1 = operand1 + 10;
// operand1 += 10;

// operand1 = operand1 - 10;
// operand1 -= 10;

// operand1 = operand1 * 10;
// operand1 *= 10;

// operand1 = operand1 / 10;
// operand1 /= 10;

const totalSeconds = 124;

const seconds = totalSeconds % 60;
const minutes = (totalSeconds - seconds) / 60;

console.log(minutes, seconds);

let test = 124;
test %= 60;
console.log("test", test);

// increment by 1 and reassign
// prefix notation will ensure the increment happens before other operations
// ++operand1;
// operand1++;

// decrement by 1 and reassign
// --operand1;
// operand1--;

// next line would lead to an error if outcommented
// myConstant = 123;

/**
    multiline
    comment
*/
// console.log(myConstant);

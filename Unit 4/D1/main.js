"use strict";

// Exercises
const e1 = (n1, n2) => {
  if (n1 === n2) console.log(3 * (n1 + n2));
  else console.log(n1 + n2);
};

const e2 = (n1, n2) => {
  if (n1 + n2 === 50 || n1 === 50 || n2 === 50) return true;
  else return false;
};

const e3 = (position, string) => {
  console.log(position);
  let newString = string.slice(0, position) + string.slice(position + 1);
  console.log(newString);
};

const e4 = (n1, n2, n3) => {
  if (n1 < n2) n1 = n2;
  if (n1 < n3) n1 = n3;
  console.log(n1);
};

const e5 = (n1, n2) => {
  return (
    ((n1 >= 40 && n1 <= 60) || (n1 >= 70 && n1 <= 100)) &&
    ((n2 >= 40 && n2 <= 60) || (n2 >= 70 && n2 <= 100))
  );
};

const e6 = (string, copies) => {
  let returnString = "";
  for (let i = 0; i < copies; i++) {
    returnString += string;
  }
  return returnString;
};

const e7 = (cityName) => {
  cityName = cityName.toUpperCase();
  if (cityName.slice(0, 3) === "LOS" || cityName.slice(0, 3) === "NEW")
    return true;
  else return false;
};

const e8 = (array) => {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const e9 = (array) => {
  if (array.length !== 2) return false;
  else if (array.includes(1) || array.includes(3)) return true;
  return false;
};

const e10 = (array) => {
  if (array.length !== 2) return false;
  else if (array.includes(1) || array.includes(3)) return false;
  else return true;
};

const e11 = (array) => {
  let longest = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) longest = array[i];
  }
  console.log(longest);
};

const e12 = (num) => {
  switch (true) {
    case num <= 0:
      console.log("too small");
      break;
    case num > 0 && num < 90:
      console.log("acute");
      break;
    case num === 90:
      console.log("right");
      break;
    case num > 90 && num < 180:
      console.log("obtuse");
      break;
    case num === 180:
      console.log("straight");
      break;
    default:
      console.log("to big");
      break;
  }
};

const e13 = (array) => {
  let biggest = Math.max(...array);
  let index = array.findIndex((element) => element === biggest);
  return index;
};

const e14 = (array) => {
  let bigEven;
  array.forEach((element) => {
    if (element % 2 === 0) {
      if (bigEven === undefined) bigEven = element;
      if (bigEven < element) bigEven = element;
    }
  });
  if (bigEven === undefined) console.log("no even num");
  else console.log(bigEven);
};

const e15 = (n1, n2) => {
  if ((n1 < 0 && n2 >= 0) || (n1 >= 0 && n2 < 0)) return true;
  else return false;
};

const e16 = (string) => {
  if (string.length < 3) return string.toUpperCase();
  let remainder = string.slice(3);
  remainder = remainder.toUpperCase();
  let first3 = string.slice(0, 3);
  first3 = first3.toLowerCase();
  console.log(first3 + remainder);
  return true;
};

console.log(e16("litt"));

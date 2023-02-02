const DIGITS_LIMIT = 10;
const DIGITS_AFTER_DECIMAL = 5;

let firstOperand = 0;
let chosenOperator = null;

const resetButton = document.getElementById("button-reset");
const resultField = document.getElementById("resultField");
const numberButtons = document.getElementsByClassName("button-number");
const operatorButtons = document.getElementsByClassName("button-operation");
const evaluateButton = document.getElementById("button-evaluate");

function resetOperator() {
  chosenOperator = null;
}

const resetButtonCallback = function () {
  resetOperator();
  resultField.value = 0;
};

const numberButtonCallback = function (event) {
  let number = event.target.innerText;

  if (resultField.value.length === DIGITS_LIMIT) {
    return;
  }

  resultField.value =
    resultField.value === "0" ? number : resultField.value + number;

  //   if (resultField.value === "0") {
  //     resultField.value = number;
  //   } else {
  //     resultField.value += number;
  //   }
};

const operatorButtonsCallback = function (event) {
  if (resultField.value !== "0") {
    firstOperand = Number.parseFloat(resultField.value);
  }

  chosenOperator = event.target.innerText;
  resultField.value = "0";
};

const evaluateButtonCallback = function () {
  if (chosenOperator === null) {
    return;
  }

  const secondOperand = Number.parseFloat(resultField.value);
  let result = resultField.value;

  switch (chosenOperator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    default:
      console.error("Unknown operator!");
  }

  resultField.value = result.toFixed(DIGITS_AFTER_DECIMAL);

  resetOperator();
};

resetButton.addEventListener("click", resetButtonCallback);
evaluateButton.addEventListener("click", evaluateButtonCallback);

for (const operatorButton of operatorButtons) {
  operatorButton.addEventListener("click", operatorButtonsCallback);
}

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", numberButtonCallback);
}

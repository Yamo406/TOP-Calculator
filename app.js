// Constants

const display = document.querySelector("#display");
const buttonsContainer = document.querySelector("#buttons-container");
const buttons = document.querySelectorAll("input[type=button]");

// Variables
let operand = 0,
  result = 0;
let operator = ["+", "-", "x", "/", "="];

// Functions
function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

function operate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
      break;

    case "-":
      return subtract(operand1, operand2);
      break;

    case "x":
      return multiply(operand1, operand2);
      break;

    case "/":
      return divide(operand1, operand2);
      break;

    default:
      break;
  }
}

function deleteAll() {
  display.value = "0";
}

function addGlobalEventListener(type, selector, callback, parent = document) {
  parent.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

// Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.

function populateDisplay(input) {
  display.value += input;
  operand += display.value;
}

addGlobalEventListener("click");

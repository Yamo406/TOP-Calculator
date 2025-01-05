// Constants

// Variables
let number1, number2;
let operator = ["+", "-", "*", "/", "="];

// Functions

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operate(operator, operand1, operand2) {
    switch (operator) {
        case "+":
            return add(operand1, operand2);
            break;

        case "-":
            return subtract(operand1, operand2);
            break;

        case "*":
            return multiply(operand1, operand2);
            break;

        case "/":
            return divide(operand1, operand2);
            break;

        default:
            break;
    }
}



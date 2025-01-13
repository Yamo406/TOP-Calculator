// Constants
const display = document.querySelector("#display");
const buttonsContainer = document.querySelector("#buttons-container");

// Variables
let operand1 = null,
	currentOperator = null;
let operand = 0;
let operator = ["+", "-", "x", "/", "="];
let pressedPercentage = false;

// Functions
function add(operand1, operand2) {
	result = operand1 + operand2;
	return result;
}

function subtract(operand1, operand2) {
	result = operand1 - operand2;
	return result;
}

function multiply(operand1, operand2) {
	result = operand1 * operand2;
	return result;
}

function divide(operand1, operand2) {
  if (operand2 === 0) {
    result = 0;
    alert(`Invalid operation Dividing 0/0`)
    return result;
  }
	result = operand1 / operand2;
	return result;
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

function clearDisplay() {
	display.value = "";
}

function deleteFromDisplay() {
	display.value = display.value.substr(0, display.value.length - 1);
	operand = Number(display.value);
}

function appendToDisplay(input) {
	display.value += input;
	operand = Number(display.value);
}

function toggleNegative() {
	if (display.value.charAt(0) !== "-") {
		display.value = "-" + display.value;
	} else {
		display.value = display.value.substr(1, display.value.length);
	}
	operand = Number(display.value);
}

function percentage() {
	if (!pressedPercentage) {
		if (display.value.contains(".")) {
			display.value = "%" + display.value / 100;
		}
		display.value = "%" + display.value / 100;
	} else {
		display.value = display.value.substr(1, display.value.length) * 100;
	}
	pressedPercentage = !pressedPercentage;
}

function checkOperandAndOperator() {
	if (operand1 === null) {
		operand1 = operand;
		currentOperator = operatorValue;
		clearDisplay();
	}
}

// event delegation helper function
function addGlobalEventListener(type, selector, callback, parent = document) {
	parent.addEventListener(type, (e) => {
		if (e.target.matches(selector)) {
			callback(e);
		}
	});
}

// operator event listern
addGlobalEventListener(
	"click",
	"[data-operator]",
	handleOperator,
	buttonsContainer
);

// number event listener
addGlobalEventListener(
	"click",
	"[data-number]",
	handleNumbers,
	buttonsContainer
);

// keybaord support
document.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "Escape":
			const acButton = document.querySelector('[data-operator="AC"]');
			if (acButton) acButton.click();
			break;
		case "Delete":
			const deleteButton = document.querySelector('[data-operator="<"]');
			if (deleteButton) deleteButton.click();
			break;

		case "%":
			const percentageButton = document.querySelector('[data-operator="%"]');
			if (percentageButton) percentageButton.click();
			break;

		case "*":
			const multiplyeButton = document.querySelector('[data-operator="x"]');
			if (multiplyeButton) multiplyeButton.click();
			break;

		case "-":
			const subtractButton = document.querySelector('[data-operator="-"]');
			if (subtractButton) subtractButton.click();
			break;

		case "+":
			const additionButton = document.querySelector('[data-operator="+"]');
			if (additionButton) additionButton.click();
			break;

		case "=":
			const equalButton = document.querySelector('[data-operator="="]');
			if (equalButton) equalButton.click();
			break;

		// numbers
		case "0":
			const zeroButton = document.querySelector('[data-number="0"]');
			if (zeroButton) zeroButton.click();
			break;

		case "1":
			const oneButton = document.querySelector('[data-number="1"]');
			if (oneButton) oneButton.click();
			break;

		case "2":
			const twoButton = document.querySelector('[data-number="2"]');
			if (twoButton) twoButton.click();
			break;

		case "3":
			const threeButton = document.querySelector('[data-number="3"]');
			if (threeButton) threeButton.click();
			break;

		case "4":
			const fourButton = document.querySelector('[data-number="4"]');
			if (fourButton) fourButton.click();
			break;

		case "5":
			const fiveButton = document.querySelector('[data-number="5"]');
			if (fiveButton) fiveButton.click();
			break;

		case "6":
			const sixButton = document.querySelector('[data-number="6"]');
			if (sixButton) sixButton.click();
			break;

		case "7":
			const sevenButton = document.querySelector('[data-number="7"]');
			if (sevenButton) sevenButton.click();
			break;

		case "8":
			const eightButton = document.querySelector('[data-number="8"]');
			if (eightButton) eightButton.click();
			break;

		case "9":
			const nineButton = document.querySelector('[data-number="9"]');
			if (nineButton) nineButton.click();
			break;

		case ".":
			const dotButton = document.querySelector('[data-number="."]');
			if (dotButton) dotButton.click();
			break;

		default:
			break;
	}
});

function handleOperator(e) {
	const operatorValue = e.target.dataset.operator;
	switch (operatorValue) {
		case "AC":
			clearDisplay();
			break;

		case "<":
			deleteFromDisplay();
			break;

		case "+/-":
			toggleNegative();
			break;

		case "%":
			percentage();
			break;

		case "/":
			if (operand1 === null) {
				operand1 = operand;
				currentOperator = operatorValue;
				clearDisplay();
			}
			break;

		case "x":
			if (operand1 === null) {
				operand1 = operand;
				currentOperator = operatorValue;
				clearDisplay();
			}
			break;

		case "-":
			if (operand1 === null) {
				operand1 = operand;
				currentOperator = operatorValue;
				clearDisplay();
			}
			break;

		case "+":
			if (operand1 === null) {
				operand1 = operand;
				currentOperator = operatorValue;
				clearDisplay();
			}
			break;

		case "=":
			if (operand1 !== null && currentOperator !== null) {
				const result = operate(currentOperator, operand1, operand);
				display.value = result;
				operand1 = null;
				currentOperator = null;
			}
			break;

		default:
			break;
	}
}

function handleNumbers(e) {
	const numberValue = e.target.dataset.number;
	switch (numberValue) {
		case "0":
			appendToDisplay(0);
			break;

		case "1":
			appendToDisplay(1);
			break;

		case "2":
			appendToDisplay(2);
			break;

		case "3":
			appendToDisplay(3);
			break;

		case "4":
			appendToDisplay(4);
			break;

		case "5":
			appendToDisplay(5);
			break;

		case "6":
			appendToDisplay(6);
			break;

		case "7":
			appendToDisplay(7);
			break;

		case "8":
			appendToDisplay(8);
			break;

		case "9":
			appendToDisplay(9);
			break;

		case ".":
			if (display.value.includes(".")) break;
			appendToDisplay(".");
			break;

		default:
			break;
	}
}

// Initialize variables to store user inputs and the result

document.addEventListener('keydown', handleKeyboardInput);

let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';
let signOfFirstNo = '';


// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        return alert("Error: Division by zero");
    }
    return a / b;
}

// Operate function
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return alert("Error: Unknown operator");
    }
}

/*// Function to update the display
function updateDisplay(content) {
    document.getElementById('display').textContent = content;
}*/

// Function to display the expression
function displayExpression() {
    const displayContent = firstNumber + (operator ? ' ' + operator + ' ' : '') + secondNumber;
    document.getElementById('display').textContent = displayContent;
}

// Function to display the result
function displayResult(result) {
    document.getElementById('result').textContent = result;
}

// Function to update the display
function updateDisplay(content) {
    displayExpression();
    if (result !== '') {
        document.getElementById('display').textContent = content;
    }
}


// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;
	
    if (!isNaN(key) || key === '.') {
        if (operator === '') {
            firstNumber += key ;
            displayExpression()
            updateDisplay(firstNumber);
        } else {
            secondNumber += key;
            displayExpression()
            updateDisplay(secondNumber);
        }
    } else if (key === 'Enter' || key === '=') {
        if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
            result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            updateDisplay(result);
            firstNumber = result.toString();
            operator = '';
            secondNumber = '';
        }
    } else if (key === 'Backspace') {
        if (operator === '') {
            firstNumber = firstNumber.slice(0, -1);
            updateDisplay(firstNumber);
        } 
        else if (secondNumber !== '')
            {
            secondNumber = secondNumber.slice(0, -1);
            updateDisplay(secondNumber);
        }
        else 
        {
            operator = '';
            updateDisplay(operator);
        }


    } else if (['+', '-', '*', '/'].includes(key)) {
        if (firstNumber === '')
            {
                if (['+'].includes(key))
                    {
                        firstNumber = '+';
                        displayExpression();
                    }
                    else if(['-'].includes(key))
                        {
                            firstNumber = '-';
                            displayExpression();
                        }
                        else
                        {
                            alert("Invalid input! Only '+' and '-' allowed.");
                        }
            }
        else if (operator !== '')
            {
                alert("Only simple expressions with 2 numbers and 1 operator(+, -, /, * ) are supported.");
            }
        else if (firstNumber !== '') {
            operator = key;
            updateDisplay(operator);
        }
    } else if (key === 'Escape') {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        result = '';
        updateDisplay('');
    }
}

// Event listeners for number buttons
let numButtons = document.getElementsByClassName("numButton");
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", function () {
        if (operator === '') {
            firstNumber += this.textContent;
            updateDisplay(firstNumber);
        } else {
            secondNumber += this.textContent;
            updateDisplay(secondNumber);
        }
    });
}

// Event listeners for operator buttons
let opButtons = document.getElementsByClassName("opButton");
for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener("click", function () {
        if (firstNumber === '')
            {
                if (['+'].includes(this.textContent))
                    {
                        firstNumber = '+';
                        displayExpression();
                    }
                    else if(['-'].includes(this.textContent))
                        {
                            firstNumber = '-';
                            displayExpression();
                        }
                        else
                        {
                            alert("Invalid input! Only '+' and '-' allowed.");
                        }
            }
        else if (operator !== '')
            {
                alert("Only simple expressions with 2 numbers and 1 operator(+, -, /, * ) are supported.");
            }
        else if (firstNumber !== '') {
            operator = this.textContent;
            updateDisplay(operator);
        }
    });
}

// Event listener for the equals button
let eqButton = document.getElementsByClassName("eqButton")[0];
eqButton.addEventListener("click", function () {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        updateDisplay(result);
        firstNumber = result.toString();
        operator = '';
        secondNumber = '';
    }
});

// Event listener for the clear button
let clearButton = document.getElementsByClassName("clearButton")[0];
clearButton.addEventListener("click", function () {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    updateDisplay('');
});

// Event listener for the backspace button
let backspaceButton = document.getElementsByClassName("backspaceButton")[0];
backspaceButton.addEventListener("click", function () {
    if (operator === '') {
        firstNumber = firstNumber.slice(0, -1);
        updateDisplay(firstNumber);
    } 
    else if (secondNumber !== '')
        {
        secondNumber = secondNumber.slice(0, -1);
        updateDisplay(secondNumber);
    }
    else 
    {
        operator = '';
        updateDisplay(operator);
    }
});
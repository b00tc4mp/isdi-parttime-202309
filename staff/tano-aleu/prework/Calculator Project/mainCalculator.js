const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let currentOperator = '';
let firstOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('value');

        if (buttonValue >= '0' && buttonValue <= '9' || buttonValue === '.') {
            currentInput += buttonValue;
        } else if ('+-*/'.includes(buttonValue)) {
            if (currentOperator) {
                display.textContent = calculate(firstOperand, currentInput, currentOperator);
                firstOperand = display.textContent;
            } else {
                firstOperand = currentInput;
            }
            currentOperator = buttonValue;
            currentInput = '';
        } else if (buttonValue === '=') {
            if (currentOperator) {
                display.textContent = calculate(firstOperand, currentInput, currentOperator);
                currentInput = display.textContent;
                currentOperator = '';
                firstOperand = '';
            }
        } else if (buttonValue === 'C') {
            currentInput = '';
        } else if (buttonValue === 'AC') {
            currentInput = '';
            currentOperator = '';
            firstOperand = '';
            display.textContent = '0';
        } else if (buttonValue === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
            display.textContent = currentInput;
        } else if (buttonValue === '+/-') {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.textContent = currentInput;
        }

        display.textContent = currentInput || display.textContent;
    });
});



const calculate = (num1, num2, operator) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero");
                return '0';
            }
            return (num1 / num2).toString();
        default:
            return num2.toString();
    }
};



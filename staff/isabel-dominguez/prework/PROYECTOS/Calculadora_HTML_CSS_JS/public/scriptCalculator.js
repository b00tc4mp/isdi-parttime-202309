class Calculator {
    sum(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }
}

class Display {
    constructor(displayResult, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayResult = displayResult;
        this.Calculator1 = new Calculator();
        this.operatortype = undefined;
        this.currentValue = '';
        this.resultCalculator = '';
        this.sings = {
            sum: '+',
            divide: '/',
            multiply: 'x',
            subtract: '-',
        }
    }

    deleteNumbers() {
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.currentValue = '';
        this.resultCalculator = '';
        this.operatortype = undefined;
        this.printValues();
    }

    compute(type) {
        this.operatortype !== 'equal' && this.calculate();
        this.operatortype = type;
        this.resultCalculator = this.currentValue || this.resultCalculator;
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return;
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayResult.textContent = `${this.resultCalculator} ${this.sings[this.operatortype] || ''}`;
    }

    calculate() {
        const resultCalculator = parseFloat(this.resultCalculator);
        const currentValue = parseFloat(this.currentValue);

        if (isNaN(currentValue) || isNaN(resultCalculator)) return;
        this.currentValue = this.Calculator1[this.operatortype](resultCalculator, currentValue);
        this.resultCalculator = '';
        this.printValues();
    }
}

const displayResult = document.querySelector('.result');
const displayCurrentValue = document.querySelector('.current-value');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');

const display = new Display(displayResult, displayCurrentValue);

btnNumbers.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

btnOperators.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value));
});


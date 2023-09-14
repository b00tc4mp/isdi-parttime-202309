const display = document.querySelector(".screen"); // PANTALLA
const buttons = document.querySelectorAll(".btn"); // BOTONES
const maxLength = 16; // LONGITUD MÁXIMA DE DISPLAY


buttons.forEach(button => {
    button.addEventListener('click', () => {

        const preshButton = button.textContent;

        if (button.id === "c") {
            display.textContent = "0";
            return;
        };

        if (button.id === 'equal') {
            try {
                const expression = display.textContent;
                const result = getOperation(expression);
                display.textContent = result;

            } catch (error) {
                display.textContent = 'Error';
            }
            return;
        };

        if (button.id === "delete") {
            if (display.textContent.length === 1) {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0, -1);
            };
            return;
        };

        if (display.textContent.length < maxLength) {
            if (display.textContent === "0") {
                display.textContent = preshButton;
            } else {
                display.textContent += preshButton;
    
            };
        };
    });
});


const getOperation = (expression) => {

    const operators = /[+\-x/]/;
    const tokens = expression.split(operators);
    const operator = expression.match(operators);

    if (tokens.length !== 2 || !operator) {
        throw new Error("Expresión inválida");
    }

    const num1 = parseFloat(tokens[0]);
    const num2 = parseFloat(tokens[1]);

    switch (operator[0]) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("División por cero");
            }
            return num1 / num2;
        default:
            throw new Error("Operador inválido");
    };
};
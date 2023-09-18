// 1- ¿Qué hora es? Declara la hora como número y devuelvela como String

const horaActual = 10.35;
const string = horaActual.toString(); // El método toString() le permite convertir cualquier valor de tipo numérico en su representación de tipo cadena (string).

console.log(`I'ts ${string} of morning.`);

// o también :

console.log(`I'ts ${(10.35).toString()} of morning.`); // También puedes llamar al método toString() inmediatamente en un valor numérico, pero debes agregar paréntesis () para envolver el valor.


// 2- Dime la hora redondeada sin minutos

const horaActualRedondeada = 10.35;
const stringRedondeado = horaActualRedondeada.toString();

console.log(`It's around ${Math.round(stringRedondeado)} of morning.`);


// 3 - Hagamos una calculadora.Primero, la suma.Crea variables con valores distintos y súmalos:

const num1 = 50;
const num2 = 6;
const suma = num1 + num2;

console.log(`The sum of ${num1} + ${num2} is ${suma}`)


// 4 - Ahora, añade su resta...

const num11 = 50;
const num22 = 6;
const suma1 = num11 + num22;
const resta = num11 - num22;

console.log(`The sum and difference of ${num11} and ${num22} is ${suma1} and ${resta}.`);


// 5 - La multiplicación...

const num3 = 50;
const num4 = 6;
const suma3 = num3 + num4;
const resta3 = num3 - num4;
const multiplication = num3 * num4;

console.log(`Sum: ${suma3}, difference: ${resta3} and multiplication: ${multiplication}.`);


// 6 - Y, por ultimo, la división.

const num10 = 50;
const num20 = 6;
const suma6 = num10 + num20;
const resta6 = num10 - num20;
const multiplication6 = num10 * num20;
const division6 = num10 / num20

console.log(`Sum: ${suma6}, difference: ${resta6}, multiplication: ${multiplication6} and division: ${division6}.`);


// 7 - Ahora, intenta multiplicar un número por una string, que devuelve ?

console.log(10 * "hour"); // NaN ( Not a Number)


// 8 - Podemos controlar este error con un condicional if?

const number = 10;
const text = "hour";

if (Number.isNaN(number * text)) {
    console.log("You can't do this operation!");
} else {
    console.log(number * text);
}
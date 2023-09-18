// 1- ¿Puedes contar cuantas letras tiene tu nombre?

const Myname = "Isabel";
const nameLength = Myname.length;

console.log(`My name has ${nameLength} letters.`);


// 2- Añade tu apellido a "name" e indica en que posición del string empieza.:

const myName = "isabel";
const myLastName = "domínguez";
const myFullName = `${myName} ${myLastName}`;
const spaceIndex = myFullName.indexOf(" "); // El método indexOf te da la posicion de tal letra. En el paréntesis hay un espacio por lo que te dará el valor donde se encuntra el espacio. Sintaxis: cadena.indexOf(valorBusqueda[, indiceDesde])
// indexOf empieza a buscar desde el 0 hacia adelante. Si no encuentra el valor te retorna un -1.
console.log(`Your last name starts on position ${spaceIndex + 1}.`); // Le sumamos 1 porque la posición de los strings empiezan por 0 siempre para que nos cuadre el numero con la letra D de Domínguez.


// 3- Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):

const MyFullName = "Isabel Domínguez";

const myFirstName = MyFullName.slice(0, spaceIndex); // Puedo poner spaceIndex o la posición 6 que es donde esta el espacio. El método slice() devuelve una copia de una parte del array. El array original no se modificará. Sintaxis: arr.slice([inicio [, fin]])
console.log(`My Name is ${myFirstName}.`);


// 4 - Ahora, solo tu apellido.

const MyFullName4 = "Isabel Domínguez";

const myLastName4 = MyFullName4.slice(spaceIndex + 1)
console.log(`My lastname is ${myLastName4}.`)


// 4.1- Imprime por consola solo tu apellido a partir de tu nombre completo con un Hello.

const MyFullName5 = "Isabel Domínguez";

const myLastName5 = MyFullName5.slice(spaceIndex + 1) // El método slice devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
console.log(`Hello! ${myLastName5}.`)


// 5 - Ahora, de tu nombre completo reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

const myLastName6 = "Domínguez";
const myName6 = "Isabel";
const myFullName6 = `${myName6} ${myLastName6}`;

const result = myFullName6.replace(myName6, "Mr."); // El método replace reemplaza.

console.log(result);


// 6- Imprime por consola tu apellido transfórmandolo a MAYÚSCULAS.

const myFullName7 = "Isabel Domínguez";
const myLastName7 = myFullName7.slice(spaceIndex + 1);
const myLastNameToUpperCase = myLastName7.toUpperCase(); // El método toUpperCase devuelve el valor de la cadena convertida a mayúsculas. Sintaxis cadena.toUpperCase().
console.log(`My lastname is ${myLastNameToUpperCase}`);


// 7 - Crea dos arrays, uno con varios nombres y otro con varios apellidos. Genera un nombre aleatorio seleccionando un elemento al azar de cada array.Convierte el nombre y apellido a camelCase y únelos para formar el nombre completo.Muestra el resultado por consola.

const firstNameList = ["Ana", "Juan", "María", "Pedro", "Lucía"];
const lastNameList = ["García", "López", "Fernández", "Martínez", "Pérez"];

const randomFirstName =
    firstNameList[Math.floor(Math.random() * firstNameList.length)]; // El método Math.floor devuelve el valor entero redondeado más bajo de la variable. 
const randomLastName =
    lastNameList[Math.floor(Math.random() * lastNameList.length)]; // El método Math.random() devuelve un valor aleatorio comprendido en el rango de 0 a menor que 1. Dicho rango puedo ser ampliado hasta los valores deseados (En este caso hasta la longitud del array).

const camelCaseRandomFirstName =
    randomFirstName.charAt(0).toLowerCase() + randomFirstName.slice(1); // El método charAt nos sirve para extraer de una cadena o un array un caracter especifico de acuerdo al indice que nosotros le proporcionemos // El método toLowerCase() devuelve la forma en minúsculas del valor char especificado. En este caso le hemos dicho que nos saque un caracter del array de los nombres de forma aleatoria (indicado en el método de antes) y en minusculas. El 0 en el metodo charAt nos dice que nos ponga en minusculas solo el primer indice del string aletarotio que coja y slice(1) nos copia el resto del string tal cual este.

const fullName = `${camelCaseRandomFirstName} ${randomLastName}`;

console.log(fullName);


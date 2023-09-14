// 1- Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

const name = ["I", "S", "A", "B", "E", "L","D","O","M","Í","N","G","U","E","Z"]

const myName = (name) => name.join("*"); // El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
const result = myName(name);
console.log(result);


// 2 - Ahora muestra cada letra de tu nombre con su posición(necesitarás un bucle for)


const name2 = "Isabel Domínguez"

console.log(name2.split(" ", 6)); // El método split divide un string por donde tu le indicas en el separador. Sirve para convertir un string en un array. Sintaxis: console.log(string.split(separator) o string.split(separator, limit).

for (let i = 0; i < 6; i++) {
    console.log(`${i + 1}º ${name2[i]}`);
}

// 4- Como en el ejercicio anterior, pero seleccionando tu apellido

console.log(name2.split(" "));

for (let i = 7; i < name2.length; i++) {
    console.log(`${i + 1}º ${name2[i]}`);
}


// 5- Puedes indicarme las iniciales de tu nombre y apellido?

const iniciales = `${name2[0]}.${name2[7]}.`;
console.log(iniciales)


// 6- Ahora, reformula el array (sin modificar manualmente el array original), introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posición tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

const name3 = ["I", "S", "A", "B", "E", "L", "D", "O", "M", "Í", "N", "G", "U", "E", "Z"];

name3.unshift("Isabel"); // El método unshift inserta los valores proporcionados al inicio de un objeto del tipo array.
name3.splice(6, 0, 31); // El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. El 6 es el índice donde se comenzará a cambiar el array. Si es mayor que la longitud del array, el punto inicial será la longitud del array. Si es negativo, empezará esa cantidad de elementos contando desde el final. Si el segundo número es igual a 0 o negativo, no se eliminará ningún elemento. En este caso, se debe especificar al menos un nuevo elemento, que en este caso es 31 la edad que queremos añadir. Si no se especifica ningún elemento, splice() solamente eliminará elementos del array.

console.log(`My name is ${name3[0]} and I'm ${name3[6]} years old.`);


// 7 - Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

const arrayName = ["Isabel", "Domínguez"];

arrayName.splice(2, 0, 31);
console.log(`My name is ${arrayName[0]} and I.m ${arrayName[1]} years old`)

arrayName.push("Tarragona");
console.log(`City added to array! => ${arrayName.join(", ")}`);
console.log(arrayName)


// 8- Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

arrayName.pop(); // El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
console.log(`City deleted! => ${arrayName.join(", ")}`);
console.log(arrayName)


// 9- Ahora, elimina el nombre y asegura los cambios

arrayName.shift(); // El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
console.log(`Name deleted! => ${arrayName.join(", ")}`);
console.log(arrayName)


// 10 - Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición ?

arrayName.unshift("Isabel")
console.log(`Name come back! => ${arrayName.join(", ")}`);
console.log(arrayName)


// 11- Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multplicationNumberByTwo = numbers.map((number) => number * 2); // El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. En este caso multiplicados.

console.log(multplicationNumberByTwo);

const letras = ["amigo", "bocadillo", "casa", "dedo"];
const plurales = letras.map((letter) => letter + "s");
console.log(plurales);


// 12- Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplicatorNumber = 5;
const multplicationNumberByTwo2 = numbers2.map((number) => number * multiplicatorNumber); // Si no especifico el número como en el ejemplo de arriba puedo modificar la variable cada vez que la declare.

console.log(multplicationNumberByTwo2);


// 13 - Podrías mostrarlos en el orden inverso ?

const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplicatorNumber3 = 5;

const multplicationNumber3 = numbers3
    .map((number) => number * multiplicatorNumber)
    .sort((menorNumber, maxNumber) => maxNumber - menorNumber); // La siguiente función ordena el array de modo ascendente

console.log(multplicationNumber3);
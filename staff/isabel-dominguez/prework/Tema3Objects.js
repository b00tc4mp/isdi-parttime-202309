//Intenta hacer el ejercicio de calcular el área del triángulo utilizando la fórmula de Herón.

let a = 7;
let b = 8;
let c = 6;

let s = (a + b + c) / 2.0;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // La función Math.sqrt () devuelve la raíz cuadrada de un número. Si se ingresa un número negativo, te devuelve NaN. 

console.log(`El área del triángulo es ${area}`)


// 1 - Escribe una función que liste los nombres de propiedad del objeto(Puedes usar el objeto creado más arriba)

const person = {
    name: "Jon",
    surname: "Snow",
    age: 34,
};

// La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas (ignorando los codificados por Símbolos, incluidas las propiedades enumerables heredadas.

for (const propiedades in person) { 
    console.log(`Las propiedades del objeto son;  ${propiedades}`);
}

//2- Ahora, crea una función que liste solo los valores de las propiedades.

for (const propiedades in person) {
    console.log(`Los valores de las propiedades son; ${person[propiedades]}`);
}


// 3- Cambia el valor de la propiedad surname por "Gonzalez" y asegurate de que los cambios se han efectuado.

// const person = {
//     name: "Jon",
//     surname: "Snow",
//     age: 34,
// };

person.surname = "Gonzalez"
console.log(`El apellido a sido modificado a => ${person.surname}`);
console.log(person)


// 4- Ahora, elimina la propiedad age y asegura los cambios.

// const person = {
//     name: "Jon",
//     surname: "Snow",
//     age: 34,
// };

delete person.age;
console.log(`He eliminado la propiedad => ${person.age}`)
console.log(person)


// 5- Añade una nueva propiedad, por ejemplo Nacionalidad y dale un valor.

// const person = {
//     name: "Jon",
//     surname: "Snow",
//     age: 34,
// };

person.nacionalidad = "Española"
console.log(`Se ha añadido la propiedad de nacionalidad al objeto => ${person.nacionalidad}`)
console.log(person)


// 6 - Lista el numero de propiedades que contiene el objeto.

// const person = {
//     name: "Jon",
//     surname: "Snow",
//     age: 34,
// };

console.log(Object.keys(person).length); // El método estático Object.keys() devuelve un array de strings que representan todas las propiedades del objeto. Sintaxis: Object.keys(obj). Si le pongo el length me dá el numero de propiedades que tiene el objeto.


// 7- Cambia la propiedad name por fullName.

// const person = {
//     name: "Jon",
//     surname: "Snow",
//     age: 34,
// };

person.fullName = person.name;
delete person.name;
console.log(person)


// 8 - Lista todas las propiedades del objeto a través de un console.log()

console.log(`Hi there, I'm ${person.fullName} and my surname is ${person.surname} . My nationality is ${person.nacionalidad}.`)
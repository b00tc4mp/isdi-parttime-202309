// 1- Primero, creamos una función que nos cree un saludo, pasa tu nombre como argumento y devuélvelo por la consola.
// 2- Intenta retornar los valores en lugar de usar console.log

const getMyName = (myName) => {
    return (`hello my name is ${myName}`);
};

let myName = "Isa"
console.log(getMyName(myName));

// También se puede hacer así ; metes el console.log dentro y solo tienes que llamar a la función para que te retorne tu saludo.

const getMyName1 = (myName1) => {
    return console.log(`hello my name is ${myName1}`)
}

let myName1 = 'Isa';
getMyName1(myName1);


// 3- Ahora, añade tu edad y concaténala al return

const getMyName3 = (myName3 , myAge3) => {
    return console.log(`hello my name is ${myName3}, I'm ${myAge3} years old`);
};
let myAge3 = 31
let myName3 = "Isa"
getMyName3(myName3, myAge3);


// 4 - Iguala tu función a una variable y ejecútala

const misDatos = (nombre, edad) => {
    return `hello my name is ${nombre}, I'm ${edad} years old`;
}
let nombre = "Paula"
let edad = 20

const misDatos2 = misDatos(nombre, edad);
console.log(misDatos2)

// 5- Ahora declara otra función que calcule tu edad respecto tu año de nacimiento.

// JavaScript tiene un objeto Date integrado que almacena la fecha y la hora y provee de métodos para manejarlos. Para crear una nueva instancia del objeto Date, utiliza la palabra clave new : const fecha = new Date ();
// Utilizado junto con el método .getFullYear le digo que solo me de el año por lo que mi variable currentYear me da el año actual. Después birthOfYear es el parámetro que yo utilizaré para hacer el calculo cada vez que llame a la función. La función sirve para que cuando la llame me haga la función que yo le he puesto dentro. Mi variable está fuera de la función y se llama de forma diferente pero el console.log lo hago llamando a la función y a mi variable para que me aplique el calculo o la instrucción que yo he puesto en mi función sobre mi variable que mas adelante puedo cambiarla y usar esa función sobre otras variables.

const calculateMyAge = (birthOfYear) => {                
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthOfYear;
    return `I'm ${age} years old`;
};

const myBirthOfYear = 1992;

console.log(calculateMyAge(myBirthOfYear));


// 6- Haz una función que solo devuelva un número random entre 1900 y 2050, ese número random.

// El método Math.floor sirve para quitarte los decimales, sino me saldría el 1950,744665758 también y solo quiero números enteros.
// Le estamos pidiendo números aleatorios que estén entre 1900 y 2050. Creamos las variables. Después el método Math.random (), devuelve un número aleatorio que puede estar entre 0 y menor a 1. Se incluye el 0 y se excluye el 1. Si lo multiplicamos por 10 nos dará valores entre 0 y menor a 10. Y si añadimos +1 nos dará valores entre 0 y menor a 11, por lo que incluira al 10. Poner el +1 nos sirve por si queremos un rango incluir el max ya que el método te lo excluye.
// En mi caso primero hará la multiplicación que es la diferencia que hay entre el max y el min (150) el +1 para que no te expluya el 150 y lo sumamos al 1900 (min) porque es de donde empezamos a coger números. Asi me saldrá un numero aleatorio que empiece por 1900 pero al multiplicarlo por 150 no me saldrá un número aleatorio mas grande que 2050 que es el rango que yo le había establecido.

const getRandomNumber1 = () => {                         
    const maxNumber = 2050;
    const minNumber = 1900;

    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};
console.log(getRandomNumber1())


// 7- Intenta englobar tus funciones de preguntar tu nombre y calcular tu edad en una única función. Las funciones en una sola función padre, el return de dicha función padre deberá ser la llamada a las funciónes hijas. El resultado de la función getRandomNumber será el argumento que se recogerá como parámetro en la función calculateMyAge()

const getRandomNumber11 = () => {
    const maxNumber = 2050;
    const minNumber = 1900;

    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

const getMyName11 = (myName11) => {
    return `hello my name is ${myName11}`
}

let myName11 = 'Soy Isa y';

const calculateMyAge11 = (birthOfYear11) => {                
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthOfYear11;
    return `tengo ${age} años`;
};

const getMyPersonalData = (myName11) => {
    const name = getMyName11(myName11);
    const randomYear = getRandomNumber11();
    const age = calculateMyAge11(randomYear);
    return `${myName11} ${age}`;
};

console.log(getMyPersonalData(myName11));


// 8- A la función anterior, evita que se pueda dar una edad negativa y en ese caso retorne 0 años.

const calculateMyAge20 = (birthOfYear) => {
    const currentYear = new Date().getFullYear();
    let age = currentYear - birthOfYear;

    if (age < 0) {
        age = 0;
    }

    return `I'm ${age} years old`;
};

const myBirthOfYear12 = 2025;

console.log(calculateMyAge20(myBirthOfYear12));
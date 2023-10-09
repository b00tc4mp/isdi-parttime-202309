// function crearPersona (nombre, apellido) {
//     return{
//         nombre: nombre,
//         apellido: apellido
//     }
// }

// const crearPersona = (nombre, apellido) => ({nombre, apellido})

// const persona = crearPersona( 'cristian' , 'x')

// console.log(persona);

// var array1= ['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve']

// console.log(array1.length);
// var ultima_posicion = array1.length -1
// console.log(ultima_posicion);
// console.log(array1[8]);
function lastIndexOf(string, searchString) {
    var lastIndex = -1 
    for (let i = String.length -1 ; i = lenght[0]; i--) {
        if (string[i] === searchString) {
            return i
        }
        
    }
    return -1

}
console.log(lastIndexOf('hello world', 'l'));
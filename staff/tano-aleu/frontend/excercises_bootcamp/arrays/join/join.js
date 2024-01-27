var array1 = ['Hola', 'mundo', 10, 20];

function join(array1, element) {
    // Inicializa el resultado con el primer elemento del array
    var result = array1[0];

    // Verifica si hay más de un elemento en el array
    if (array1.length >= 1) {
        // Utiliza un bucle para concatenar los elementos con el separador
        for (let i = 1; i < array1.length; i++) {
            result = result + element + array1[i];
        }
    }

    // Devuelve la cadena resultante
    return result;
}


// Resumen de la función join:

// Propósito: Unir los elementos de un array en una cadena, utilizando un separador opcional.

// Implementación:

// Inicializa el resultado con el primer elemento del array.
// Verifica si hay más de un elemento en el array para evitar un separador al principio.
// Utiliza un bucle para concatenar los elementos con el separador especificado.
// Devuelve la cadena resultante.


// Explicación paso a paso:


// 1. Inicialización del resultado:

// var result = array1[0];
// Inicializa la variable result con el primer elemento del array.


// 2. Verificación de la longitud del array:

// if (array1.length >= 1) {
//     // Utiliza un bucle para concatenar los elementos con el separador
//     // ...
// }
// Verifica si hay más de un elemento en el array antes de entrar en el bucle. Esto evita la concatenación innecesaria de un separador al principio de la cadena.


// 3. Bucle para concatenar elementos con el separador:

// for (let i = 1; i < array1.length; i++) {
//     result = result + element + array1[i];
// }
// Utiliza un bucle for para iterar sobre los elementos del array a partir del segundo elemento (i = 1). Concatena cada elemento con el separador (element) al resultado.


// 3. Devolver la cadena resultante:

// return result;
// Devuelve la cadena resultante después de la concatenación.
function push(array) {
    // Itera sobre los argumentos (elementos a agregar) a partir del segundo argumento (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // Agrega cada elemento al final del array
        array[array.length] = arguments[i];
    }

    // Devuelve la nueva longitud del array
    return array.length;
}


// Resumen de la función push:

// Propósito: Agregar uno o más elementos al final de un array y devolver la nueva longitud del array.

// Implementación:

// Utiliza un bucle for para iterar sobre los argumentos a partir del segundo argumento.
// Agrega cada elemento al final del array utilizando la propiedad length del array.
// Devuelve la nueva longitud del array después de agregar los elementos.



// Explicación paso a paso:


// 1. Iteración sobre los argumentos:

// for (var i = 1; i < arguments.length; i++) {
//     // Agrega cada elemento al final del array
//     array[array.length] = arguments[i];
// }

// Utiliza un bucle for para iterar sobre los argumentos a partir del segundo argumento (i = 1). Cada argumento adicional representa un elemento que se agregará al array.


// 2. Agrega cada elemento al final del array:

// array[array.length] = arguments[i];
// Utiliza la propiedad length del array para determinar la posición donde se debe agregar el nuevo elemento. Agrega cada elemento al final del array.


// 3. Devuelve la nueva longitud del array:

// return array.length;
// Después de agregar todos los elementos, la función devuelve la nueva longitud del array, que ahora incluye los elementos recién agregados.

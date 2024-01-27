function concat() {
    // Crea un nuevo array vacío para almacenar los elementos concatenados
    var newArray = [];

    // Itera sobre los argumentos (arrays) proporcionados a la función
    for (var i = 0; i < arguments.length; i++) {
        // Obtiene el array actual en la iteración
        var currentArray = arguments[i];

        // Itera sobre cada elemento del array actual y agrégalo al nuevo array
        for (var j = 0; j < currentArray.length; j++) {
            // Agrega el elemento actual al final del nuevo array
            newArray[newArray.length] = currentArray[j];
        }
    }

    // Devuelve el nuevo array que contiene la concatenación de todos los elementos
    return newArray;
}

// concat

// Propósito: Concatenar múltiples arrays en uno solo.
// Implementación: Correcta. Utiliza un bucle for para iterar sobre los argumentos (que son arrays) y agrega cada elemento al nuevo array resultante.



// Explicación paso a paso:

// 1. Creación del nuevo array:

// var newArray = [];
// Se inicia un nuevo array vacío llamado newArray, que se utilizará para almacenar los elementos concatenados.


// 2. Iteración sobre los argumentos (arrays):

// for (var i = 0; i < arguments.length; i++) {
//     var currentArray = arguments[i];
// Se utiliza un bucle for para iterar sobre cada argumento proporcionado a la función. Los argumentos se pueden acceder mediante el objeto especial arguments. En cada iteración, currentArray representa el array actual que se está procesando.


// 3. Iteración sobre los elementos del array actual:

// for (var j = 0; j < currentArray.length; j++) {
//     newArray[newArray.length] = currentArray[j];
// }
// Se utiliza otro bucle for para iterar sobre cada elemento del array actual (currentArray). En cada iteración, se agrega el elemento al final del newArray.


// 4. Devolver el nuevo array concatenado:

// return newArray;
// Finalmente, la función devuelve el nuevo array (newArray), que contiene la concatenación de todos los elementos de los arrays proporcionados como argumentos.

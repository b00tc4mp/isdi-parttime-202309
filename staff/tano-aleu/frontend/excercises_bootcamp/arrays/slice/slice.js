function slice(array, start, end) {
    // Crea un nuevo array para almacenar la porción extraída
    var newArray = [];

    // Itera sobre los elementos del array original desde el índice start hasta (end - 1)
    for (var i = start; i < end; i++) {
        // Agrega cada elemento al nuevo array
        newArray[newArray.length] = array[i];
    }

    // Devuelve la porción del array como un nuevo array
    return newArray;
}


// Resumen de la función slice:

// Propósito: Extraer una porción de un array, comenzando desde el índice start hasta (pero no incluyendo) el índice end, y devolverla como un nuevo array.

// Implementación:

// Crea un nuevo array (newArray) para almacenar la porción extraída.
// Itera sobre los elementos del array original desde el índice start hasta (pero no incluyendo) el índice end.
// Agrega cada elemento al nuevo array.
// Devuelve el nuevo array que representa la porción extraída del array original.



// Explicación paso a paso:

// 1. Creación del nuevo array:

// var newArray = [];
// Inicializa un nuevo array (newArray) que se utilizará para almacenar la porción extraída del array original.


// 2.Iteración sobre los elementos del array original:

// for (var i = start; i < end; i++) {
//     // Agrega cada elemento al nuevo array
//     newArray[newArray.length] = array[i];
// }
// Utiliza un bucle for para iterar sobre los elementos del array original desde el índice start hasta (pero no incluyendo) el índice end. Agrega cada elemento al nuevo array.


// 3. Devolver la porción del array como un nuevo array:

// return newArray;
// Devuelve el nuevo array (newArray), que representa la porción extraída del array original.

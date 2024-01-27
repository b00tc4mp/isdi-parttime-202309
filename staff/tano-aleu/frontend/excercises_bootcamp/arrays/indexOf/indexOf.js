function indexOf(array, searchElement) {
    // Itera sobre cada elemento del array original
    for (var i = 0; i < array.length; i++) {
        // Compara el elemento actual con el elemento de búsqueda
        if (array[i] === searchElement) {
            // Si se encuentra una coincidencia, devuelve el índice actual
            return i;
        }
    }
    // Si no se encuentra el elemento, devuelve -1
    return -1;
}

// Resumen de la función indexOf:

// Propósito: Buscar la primera ocurrencia de un elemento en un array y devolver su índice. Si el elemento no se encuentra, devuelve -1.

// Implementación:

// Utiliza un bucle for para iterar sobre cada elemento del array original.
// Compara cada elemento con el elemento de búsqueda (searchElement).
// Si encuentra una coincidencia, devuelve el índice actual.
// Si no se encuentra el elemento, devuelve -1.


// Explicación paso a paso:


// 1. Iteración sobre cada elemento del array original:

// for (var i = 0; i < array.length; i++) {
//     // Compara el elemento actual con el elemento de búsqueda
//     if (array[i] === searchElement) {
//         // Si se encuentra una coincidencia, devuelve el índice actual
//         return i;
//     }
// }

// Se utiliza un bucle for para iterar sobre cada elemento del array original. En cada iteración, compara el elemento actual (array[i]) con el elemento de búsqueda (searchElement).


// 2. Verificación de coincidencia:

// if (array[i] === searchElement) {
//     // Si se encuentra una coincidencia, devuelve el índice actual
//     return i;
// }
// Si encuentra una coincidencia, devuelve el índice actual (i). La comparación array[i] === searchElement verifica si el elemento actual es igual al elemento de búsqueda.


// 3. Devolver -1 si no se encuentra el elemento:

// return -1;
// Si no se encuentra ninguna coincidencia durante la iteración, la función devuelve -1, indicando que el elemento de búsqueda no está presente en el array.
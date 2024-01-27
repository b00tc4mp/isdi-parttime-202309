function find(array, callback) {
    // Itera sobre cada elemento del array original
    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        // Verifica si el elemento cumple con la condición especificada en el callback
        if (callback(element))
            // Si cumple, devuelve el elemento y termina la búsqueda
            return element;
    }
}

// - Explicación paso a paso:

// 1. Iteración sobre cada elemento del array original:

// for (var i = 0; i < array.length; i++) {
//     var element = array[i];
// Se utiliza un bucle for para iterar sobre cada elemento del array original. element representa el elemento actual que se está procesando.


// 2. Verificación con el callback:

// if (callback(element))
//     return element;
// Se utiliza la función de callback (callback) para verificar si el elemento cumple con cierta condición. Si el resultado de callback(element) es verdadero, la función devuelve el elemento y finaliza la búsqueda.


// 3. Finalización de la búsqueda:

// // Si se llega a este punto, significa que no se encontró ningún elemento que cumpla con la condición
// // En JavaScript, si una función no tiene una declaración "return", devuelve automáticamente "undefined".

// Si no se ha encontrado ningún elemento que cumpla con la condición, la función termina y no hay una declaración explícita de return. En JavaScript, una función que no tiene una declaración de return devuelve automáticamente undefined.
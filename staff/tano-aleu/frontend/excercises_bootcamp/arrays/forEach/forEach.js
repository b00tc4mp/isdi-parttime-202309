function forEach(array, callback) {
    // 1. Utiliza un bucle 'for' para iterar sobre cada elemento del array.
    for (var i = 0; i < array.length; i++) {
        // 2. Dentro del bucle, asigna el valor del elemento actual a la variable 'v'.
        var v = array[i];

        // 3. Llama a la función de callback con el elemento actual como argumento.
        callback(v);
    }
}



// Resumen de la función forEach:

// Propósito: Iterar sobre cada elemento de un array y aplicar una función de callback a cada elemento.

// Implementación:

// Utiliza un bucle for para iterar sobre cada elemento del array.
// Dentro del bucle, asigna el valor del elemento actual a la variable v.
// Llama a la función de callback (callback) con el elemento actual como argumento.




// Explicación Detallada:

// 1. Parámetros de la función:

// La función forEach toma dos parámetros: array, que es el array sobre el cual iterará, y callback, que es la función que se aplicará a cada elemento del array.


// 2. Bucle for:

// Utiliza un bucle for para iterar sobre cada elemento del array. La variable i se incrementa desde 0 hasta la longitud del array (array.length - 1).


// 3. Obtención del Elemento Actual:

// En cada iteración, obtiene el elemento actual del array utilizando la variable de índice i y lo asigna a la variable v.


// 4. Llamada a la Función de Callback:

// Dentro del bucle, llama a la función de callback (callback) pasando el elemento actual (v) como argumento.
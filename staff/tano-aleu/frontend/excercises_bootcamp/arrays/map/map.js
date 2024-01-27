function map(array, callback) {
    // Crea un nuevo array para almacenar los resultados
    var result = [];

    // Itera sobre cada elemento del array original
    for (var i = 0; i < array.length; i++) {
        // Obtiene el elemento actual
        var element = array[i];

        // Aplica la función de callback al elemento y guarda el resultado en el nuevo array
        result[i] = callback(element);
    }

    // Devuelve el nuevo array con los resultados transformados
    return result;
}

// map

// Propósito: Transformar cada elemento de un array utilizando una función de callback.
// Implementación: Correcta. Utiliza un bucle for para iterar sobre el array original y aplica la función de callback a cada elemento, almacenando los resultados en un nuevo array.



// Explicación paso a paso:


// 1. Creación del array de resultados:

// var result = [];
// Se crea un nuevo array vacío llamado result, que se utilizará para almacenar los resultados de aplicar la función de callback a cada elemento del array original.


// 2. Iteración sobre el array original:

// for (var i = 0; i < array.length; i++) {
//     // Obtiene el elemento actual
//     var element = array[i];
// Se utiliza un bucle for para iterar sobre cada elemento del array original.


// 3. Aplicación de la función de callback:

// result[i] = callback(element);
// Se aplica la función de callback al elemento actual y se guarda el resultado en el nuevo array result en la misma posición.



// 4. Devolver el nuevo array con resultados transformados:

// return result;
// Finalmente, la función devuelve el nuevo array result que contiene los resultados transformados de aplicar la función de callback a cada elemento del array original.
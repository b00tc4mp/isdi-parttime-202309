function filter(array, callback) {
    // Crea un nuevo array para almacenar los elementos filtrados
    var result = [];

    // Itera sobre cada elemento del array original
    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        // Verifica si el elemento cumple con la condición especificada en el callback
        if (callback(element))
            // Si cumple, agrega el elemento al nuevo array
            result[result.length] = element;
    }

    // Devuelve el nuevo array con los elementos que cumplieron la condición
    return result;
}


// filter

// Propósito: Filtrar elementos de un array basándose en una condición especificada por una función de callback.
// Implementación: Correcta. Utiliza un bucle for para iterar sobre el array original y agrega al nuevo array solo los elementos que cumplen con la condición especificada por la función de callback.



// Explicacion paso por paso: 

// 1. Creación del nuevo array:

// var result = [];
// Se inicia un nuevo array vacío llamado result, que se utilizará para almacenar los elementos que cumplen con la condición.


// 2. Iteración sobre cada elemento del array original:

// for (var i = 0; i < array.length; i++) {
//     var element = array[i];
// Se utiliza un bucle for para iterar sobre cada elemento del array original. element representa el elemento actual que se está procesando.


// 3. Verificación con el callback:

// if (callback(element))
//     result[result.length] = element;
// Se utiliza la función de callback (callback) para verificar si el elemento cumple con cierta condición. Si el resultado de callback(element) es verdadero, el elemento se agrega al nuevo array (result).


// 4. Devolver el nuevo array filtrado:

// return result;
// Finalmente, la función devuelve el nuevo array (result), que contiene solo los elementos que cumplen con la condición especificada en el callback.
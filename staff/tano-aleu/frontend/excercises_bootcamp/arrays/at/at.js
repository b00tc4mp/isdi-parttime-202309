var array = ['Hello', 'world', 'Hola', 'mundo'] 

// Versión corta usando operador ternario

function at(array, index) { 
    
    // Si index es mayor o igual a cero, devuelve array[index], 
    // de lo contrario, devuelve array[array.length + index]

    return array[index >= 0 ? index : array.length + index];
}

// at

// Propósito: Obtener un elemento de un array basándose en un índice, considerando índices negativos como cuentas hacia atrás desde el final del array.
// Implementación: Correcta. Utiliza una expresión condicional (operador ternario) para calcular el índice ajustado y devuelve el elemento correspondiente del array original.


/*

// Versión más larga con comentarios detallados

function at2(array, index) {
    // Si el índice es negativo, ajusta el índice sumándole la longitud del array
    if (index < 0) {
        index = index + array.length;
    }

    // Verifica si el índice ajustado está dentro de los límites del array
    if (index >= 0 && index < array.length) {
        // Devuelve el elemento en la posición correspondiente del array
        return array[index];
    } else {
        // Si el índice no es válido, devuelve undefined
        return undefined;
    }
}
*/


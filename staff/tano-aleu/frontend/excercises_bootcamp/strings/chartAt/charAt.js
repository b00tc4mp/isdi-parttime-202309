function charAt(string, index) {
    // Verifica si el índice está fuera de los límites de la cadena
    if (index < 0 || index >= string.length)
        return '';

    // Devuelve el carácter en la posición especificada por el índice
    return string[index];
}



// Resumen de la función charAt:

// Propósito: Obtener el carácter en una posición específica de una cadena.

// Implementación:

// Verifica si el índice está fuera de los límites válidos de la cadena (index < 0 o index >= string.length).
// Si el índice es inválido, devuelve una cadena vacía ('').
// Si el índice es válido, devuelve el carácter en la posición especificada por el índice en la cadena.



// Explicación paso a paso:


// 1. Verificación del índice:

// La condición if (index < 0 || index >= string.length) verifica si el índice está fuera de los límites válidos de la cadena. Si es así, la función devuelve una cadena vacía (''), indicando que el índice es inválido.


// 2. Devolver el carácter en la posición especificada:

// Si el índice es válido, la función utiliza string[index] para acceder al carácter en la posición especificada por el índice y lo devuelve.






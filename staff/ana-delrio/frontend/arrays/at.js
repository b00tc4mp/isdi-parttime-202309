// El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, 
// permitiendo valores positivos y negativos
// Los valores negativos contarán desde el último elemento del array


function at(array, index) {
    if (index < 0) {
        // comprobamos si el índice es negativo
        // si lo es, ajustamos el índice para contar desde el final del array
        index = index + array.length
        // Si el índice index es negativo, significa que estás tratando de acceder a un elemento desde el final del array 
        // Para hacerlo, el código ajusta el índice sumándole la longitud del array array.length.
        // Por ejemplo, si index es -1 y la longitud del array es 5, entonces index se ajustaría de la siguiente manera: index = -1 + 5
    }
    // Esta condición asegura que el índice esté dentro de los límites válidos del array.
    if (index >= 0 && index < array.length) {
        return array[index]
        // Si es valido, retomamos el elemento en la posición correspondiente 

    } else {
        return undefined
    }
}


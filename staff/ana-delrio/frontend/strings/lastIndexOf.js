function lastIndexOf(string, searchString) {
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] === searchString) {
            return i
        }
    }

    return -1
}


// El método lastIndexOf se utiliza para buscar la última aparición de un elemento específico en un array o una cadena de texto, 
// y luego devuelve la posición (índice) de esa última aparición. 
// Si el elemento no se encuentra en el array o la cadena, devuelve -1.

function indexOf(string, searchString) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === searchString) {
            return i
        }
    }

    return -1
}

// El método indexOf en JavaScript se utiliza para buscar la primera aparición de un elemento específico en un array o una cadena de texto 
// y devuelve la posición (índice) de esa primera aparición. 
// Si el elemento no se encuentra en el array o la cadena, devuelve -1.

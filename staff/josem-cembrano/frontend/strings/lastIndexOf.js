function lastIndexOf(string, searchString) {
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] === searchString) {
            return i
        }
    }

    return -1
}


// lastIndexOf(), devuelve en caso de que se repita, el ultimo parametro indicado si no lo encuentra devuelve -1.
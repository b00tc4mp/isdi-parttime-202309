function lastIndexOf(string, searchString) {
    var lastIndex = -1
    for (let i = 0; i < string.length; i++) {
        if (string[i] === searchString) {
            lastIndex = i
        }
    }
    return lastIndex;
}

console.log(lastIndexOf('hello world', 'l'))

//devuelve en caso de que se repita, el ultimo parametro indicado si no lo encuentra devuelve -1.
function pop(array) {
    if (array.length === 0) {
        return undefined
    } else {
        var lastElement = array[array.length - 1]
        array.length--
    }

    return lastElement
}

/*
- Cojo como parámetro el array.
- Hago un if, si el array está vaciío devuelve undefined. Y si hay elementos dentro le digo que me devuelva el último.
- Actualizo la longitud del array a 1 menos.
*/
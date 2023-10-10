function pop(array) {
    if (array.length === 0)
        return

    var lastElement = array[array.length - 1]
    array.length--

    return lastElement
}

/*
- Cojo como parámetro el array.
- Hago un if, si el array está vacío devuelve undefined. Y si hay elementos dentro guardo el último en la variable lastElement.
- Actualizo la longitud del array a 1 menos.
*/
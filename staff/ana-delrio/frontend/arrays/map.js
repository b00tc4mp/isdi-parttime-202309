

// DEFINIMOS una función llamada "map" que toma un array y una función de callback como argumentos
function map(array, callback) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        // tomar el elemento en la posición i del array original array, y asignándolo a una nueva variable llamada element
        var element = array[i]
        // estamos reemplazando el elemento original en newArray[i] con el resultado de aplicar la función callback a ese elemento
        newArray[i] = callback(element)
    }

    return newArray
}

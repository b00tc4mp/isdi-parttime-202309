// La función "find" buscará un valor en el array que cumple con la condición definida en "isGreaterThan5" y lo almacenará en "foundvalue"
// Definimos una función llamada "find" que toma dos argumentos: un array y una función de callback
function find(array, callback) {

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        // Llamamos a la función de callback "isGreaterThan5" con el elemento actual
        // Si la función de callback devuelve true, significa que hemos encontrado un valor que cumple con la condición
        if (callback(element))
            return element
    }

}
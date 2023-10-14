
// DEFINICION una función llamada "filter" que toma un array y una función de callback como argumentos
function filter(array, callback) {
    // Creamos un array vacío para almacenar los elementos que pasen la prueba del callback
    var result = []
    for (var i = 0; i < array.length; i++) {
        // creamos una varibale element para poder trabjar con el elemento actual sobre el qu estamos iterando [i]
        var element = array[i]

        // Llamamos a la función de callback con el elemento actual y comprobamos si devuelve true
        if (callback(element))
            // es una forma de acceder al próximo índice disponible en el array result. 
            // Como los índices de un array comienzan desde 0, result.length nos proporciona el siguiente índice disponible
            result[result.length] = element
    }

    return result
}
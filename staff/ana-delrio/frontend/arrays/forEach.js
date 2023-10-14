

// DEFINICION de la función personalizada 'forEach' que toma un array y una función de callback
function forEach(array, callback) {
    // Usamos un bucle 'for' para recorrer el array 'array'
    for (var i = 0; i < array.length; i++) {
        // Obtenemos el  valor del elemento en la posición 'i' y lo almacenamos en la variable 'v'
        var v = array[i]

        // Llamamos a la función de callback pasando 'v' como argumento
        callback(v)
    }
}


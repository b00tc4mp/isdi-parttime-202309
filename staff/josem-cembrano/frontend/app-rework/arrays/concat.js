function concat(array1, array2, array3) {
    var finalArray = [];

    for (var i = 0; i < arguments.length; i++) {/* arguments (es un objeto), que contiene todos los argumentos pasados a la funcion,
    'for' itera a través de los argumentos (array1, array2, y array3) usando (arguments.length) para saber cuántos argumentos se pasaron.*/
        for (var j = 0; j < arguments[i].length; j++) {/*for itera a través de los elementos dentro de cada uno de los arrays argumento (por ejemplo, array1, array2, o array3)
         usando arguments[i].length.*/
            /*En cada iteración del segundo bucle, se agrega el elemento actual al final del array finalArray utilizando finalArray[finalArray.length] = arguments[i][j];. 
            Esto es equivalente a usar push para agregar elementos al final del array.*/
            finalArray[finalArray.length] = arguments[i][j];
        }
    }
    return finalArray
}



function slice(keepIndex) {
    var newArray = []
    for (var i = 0; i < keepIndex.length; i++) {
        if (keepIndex[i] < 0) {//si es Negativo
            keepIndex[i] += array.length//meto keepIndex[i] en el array para ajustar el indice negativo y empezar a contar desde atras.
        }
        if (keepIndex[i] >= 0 && keepIndex[i] < array.length) {//Si es positivo
            newArray[newArray.length] = array[keepIndex[i]]// metemos en un nuevo array los keepIndex[i] que estaban en el array.
        }
    }
    return newArray// llamamos al newArray con los indices que indicamos. 
}

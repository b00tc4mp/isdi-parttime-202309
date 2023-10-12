function concat(){  //eso indica que no hay un número fijo de parámetros

    var newArray = []

    for (var i = 0; i < arguments.length; i++){ // arguments.lenght te indica el número de parámetros que se pasan
        var firstArray = arguments[i] //el primer array que pasamos, que se irá incrementando

        for (var j = 0; j < firstArray.length; j++){ 
            newArray[newArray.length] = firstArray[j] //en el nuevo array que he creado, meto el primer elemento                             

        }

    }
  
    return newArray

}

// este método une dos o más arrays en uno


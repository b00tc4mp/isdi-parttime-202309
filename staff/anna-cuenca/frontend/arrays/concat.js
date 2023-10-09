function concat(...arrays){  //eso indica que no hay un número fijo de parámetros

    var newArray = []

    for (var i = 0; i < arrays.length; i++){ // arrays.lenght te indica el número de parámetros que se pasan
        var firstArray = arrays[i] //el primer array que pasamos, que se irá incrementando

        for (var j = 0; j < firstArray.length; j++){ 
            newArray.push(firstArray[j]) // en el nuevo array que he creado, meto el primer elemento
                                            // como la i se irá incrementando, si tengo más, los irá poniendo

        }

    }
  
    return newArray

}
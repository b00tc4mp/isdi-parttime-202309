function join(array, separator){ 

    var newArray = []

    

    for (var i = 0; i < array.length; i++){ 

        newArray = newArray + array[i] // primero lo junto

        if (i < array.length-1){ 
            newArray = newArray + separator // y si no es la última posiciòn, añado el separador
        }
      
    }
  
    return newArray

}

// junta elementos de un array y le puedes poner separador
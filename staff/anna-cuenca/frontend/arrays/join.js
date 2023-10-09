function join(array, separator){ 

    var newArray = []

    

    for (var i = 0; i < array.length; i++){ 

        newArray = newArray + array[i] 

        if (i < array.length-1){
            newArray = newArray + separator
        }
      
    }
  
    return newArray

}
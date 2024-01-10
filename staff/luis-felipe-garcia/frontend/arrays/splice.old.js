function splice(array, start, deleteCount) {
    output = []

    // condicional pasar splice sin argumentos ni valor de inicio 
    if (!start && arguments.length === 1) {
        return array
    }

    /*
        if (start < -array.length) start = 0
        else if (start < 0) start = array.length + start
    
        if (!deleteCount || deleteCount > array.length - start) deleteCount = array.length - start
        else if (deleteCount <= 0) deleteCount = 0
    
        // if (start > deleteCount || start > array.length) return []*/

    var elementsToDelete = []
    if (deleteCount >= 1) {
        for (i = 0; i < deleteCount; i++) {
            elementsToDelete[i] = array[start + i]
        }
        console.log(elementsToDelete)
    }

    var itemsToAdd = []

    for (i = 3; i < arguments.length; i++) {
        itemsToAdd[i - 3] = arguments[i]
    }
    console.log(itemsToAdd)
    /*
        for (i = 0; i < deleteCount; i++) {
            array[start + i] = array[start + i + 1]
        }*/

    /*
 
    for (var i = start; i < deleteCount; i++) {
        output[output.length] = array[i]
    }*/
    //  return array
}
function indexOf(array, element, index) {

    if (index < 0){ // primero compruebro que el índice sea menor que el array
        index = array.length + index
    }

    if (index >= 0 && index < array.length){  

        for (var i = index; i < array.length; i++){ //empieza a contar por el elemento que le paso como 3 parametro
            if (array[i] === element)
            return i
        }
    
        return -1
    
    }

}





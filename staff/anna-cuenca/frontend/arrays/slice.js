function slice(array, index, end) {

    var newArray = []

    if (index === undefined){
        newArray = array
        return newArray
    }

    if (index < 0){ 
        
        index = array.length + index

    } 


    if (end < 0){ 
        
        end = array.length + end

    } 
    
    if (index >= 0 && index < array.length){  

        if (end === undefined){
            for (var i = index; i < array.length; i++){ 
                newArray[newArray.length]= array[i]

                
            }

            return newArray

        } else {

            for (var i = index; i < end; i++){ 
                newArray[newArray.length]= array[i]

                
            }
            return newArray

        }

    
    }

}

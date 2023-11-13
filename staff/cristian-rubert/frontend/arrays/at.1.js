function at(array, index) {
    if (index >= 0) {
        return array[index]
    } 
    
    return array[array.length + index]
}
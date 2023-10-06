var array = [0, 1, 'Hola', 'mundo'] 
function at(array, index) { 
    if (index >=0) return array[index]
    else return array[array.length+index-1]
}

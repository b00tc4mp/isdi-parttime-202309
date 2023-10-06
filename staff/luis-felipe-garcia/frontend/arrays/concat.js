var array1 = [0, 1, 'Hola', 'mundo'] 
var array2 = ['this', 'is', 'a', 'test']
function concat(array1, array2) { 
    var result = array1
    for (let i = 0; i < array2.length; i++){
        result[result.length] = array2[i]
    }
    return result
}

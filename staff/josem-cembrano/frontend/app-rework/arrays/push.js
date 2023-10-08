var array = ['English:', 'hola', 'mundo', false, '=>']
var array1 = ['English']

var push = function (array, array1) {
    for (var i = 0; i < array1.length; i++) {
        array[array.length] = array1[i]
    }
    return array.length
}
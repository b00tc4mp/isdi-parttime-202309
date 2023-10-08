var array = ['English:', 'hola', 'mundo', false, '=>']
var array1 = ['English:', 'hello', 'world', true]

var concat = function (array, array1) {
    for (var i = 0; i < array1.length; i++) {
        array[array.length] = array1[i]//pregunta: por que se concatena el array1 y no solo el [i] de array1
    }
    return array
}
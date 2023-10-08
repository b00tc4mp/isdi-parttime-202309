var array = ['hola', 'mundo']
var at = function (array, searchPosition) {
    if (searchPosition >= 0) return array[searchPosition]
    else { return array[array.length + searchPosition] }
}
var array = ['hello', 'world', '=>']
var element = '-'

var join = function (array, element) {
    var joinElement = ''
    for (var i = 0; i < array.length; i++) {
        joinElement += array[i] + element
    }
    return joinElement
}

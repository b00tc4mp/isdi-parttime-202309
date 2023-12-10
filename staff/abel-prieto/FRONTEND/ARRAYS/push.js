function push(array, object) {
    for (var i = 0; i < array.length; i++) {
        array[array.length] = object

        return array.length
    }
}
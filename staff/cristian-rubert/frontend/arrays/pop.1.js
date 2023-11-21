function pop(array) {
    var last = array[array.length - 1]

    delete array[--array.length]

    return last
}
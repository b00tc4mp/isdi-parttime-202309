function pop(array) {
    if (!array.length) return

    var last = array[array.length - 1]

    delete array[--array.length]

    return last
}
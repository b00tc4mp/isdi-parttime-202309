function at(array, index) {
    return array[index >= 0 ? index : array.length + index]
}
function indexOf(array, index) {
    for (var i = 0; i < array.length; i++) {
        if (index === array[i]) {
            return i
        }
    }

    return -1
}
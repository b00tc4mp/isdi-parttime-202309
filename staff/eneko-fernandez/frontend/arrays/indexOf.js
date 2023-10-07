function indexOf(array, itemToSearch) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === itemToSearch)
            return i
    }

    return -1
}
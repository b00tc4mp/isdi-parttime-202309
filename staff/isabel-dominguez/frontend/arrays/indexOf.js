function indexOf(array, searchIndex) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchIndex) {
            return i;
        }
    }
    return -1;
}

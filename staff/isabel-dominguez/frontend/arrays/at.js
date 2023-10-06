function at(array, index) {
    if (index < 0) {
        index = index + 5;
    }

    if (index >= 0 && index < array.length) {
        return array[index];
    } else {
        return undefined;
    }
}

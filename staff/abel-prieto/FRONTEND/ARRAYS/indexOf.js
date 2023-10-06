var array = ['dog', 'cat', 'mouse', 'wolf', 'lion']

function indexOf(array, index) {
    for (i = 0; i < array.length; i++) {
        if (index === array[i]) {
            return index
        }
    }

    return -1
}
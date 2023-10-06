var array = ['dog', 'cat', 'mouse', 'wolf', 'lion']

function at(array, index) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === index) {
            return i
        }
    }
    for (i = array.length -1; i > array.length; i--) {
        if (array[i] === index) {
            return i
        }
    }

    return undefined
}
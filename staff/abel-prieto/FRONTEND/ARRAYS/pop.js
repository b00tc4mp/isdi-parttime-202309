var array = ['Miguel', 'Cristina', 'Pedro', 'Raúl', 'Juan']

function pop(array) {
    var newArray = []

    for (var i = 0; i < array.length -1; i++) {
        newArray[i] = array[i]
    }

    return newArray
}

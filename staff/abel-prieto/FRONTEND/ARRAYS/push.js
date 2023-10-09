var array = ['Dog', 'Cat', 'Mouse']

function push(array, object) {
    var newArray = []
    for (i = 0; i < array.length; i++) {
        newArray[i] = array[i]
    }

    newArray[newArray.length] = object

    return newArray
}
var array = ['Dog', 'Cat', 'Mouse', 'Wolf', 'Lion']

function join(array, element) {
    var result = array[0]  

    for (i = 1; i < array.length; i++) {
        result += element + array[i]
    }

    return result
}

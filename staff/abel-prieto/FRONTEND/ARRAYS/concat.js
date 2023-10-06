var array1 = ['Dog', 'Cat', 'Mouse']
var array2 = ['Wolf', 'Tiger', 'Lion']
var newArray = []

function concat(array1, array2) {
    var firstResult = array1[0]

    for (i = 0; i < array1.length; i++) {
        firstResult +=  array1[i]
    }
    
    var secondResult = array2[0]

    for (i = 1; i < array2.length; i++) {
        secondResult += array2[i]
    }

    result = firstResult + secondResult
    
    return result
}

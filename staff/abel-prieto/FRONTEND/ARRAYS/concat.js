var array1 = ['Dog', 'Cat', 'Mouse']
var array2 = ['Wolf', 'Tiger', 'Lion']

function concat(array1, array2) {
    var newArray = []

    var firstArray = array1[0]
    for (i = 1; i < array1.length; i++) {
        firstArray +=  array1[i]
    }
    
    var secondArray = array2[0]
    for (j = 1; j < array2.length; j++) {
        secondArray += array2[j]
    }

    newArray = firstArray + secondArray
    
    return newArray
}

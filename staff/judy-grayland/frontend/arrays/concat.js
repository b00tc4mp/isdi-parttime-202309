function concat() {
  var newArray = []

  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      newArray[newArray.length] = arguments[i][j]
    }
  }

  return newArray
}
// We use the arguments object (an array-like object) because it references all the arguments passed into that function (ie. you don't have to specify the number of arrays to be concatinated).
// You need to declare newArray but leave it empty, and then loop through both variables. The values get added to the new variable. If you assign newArray the value of array1 and then loop through array2 and add the elements, it will modify array1 because arrays are not primitive values and they reference the same place.

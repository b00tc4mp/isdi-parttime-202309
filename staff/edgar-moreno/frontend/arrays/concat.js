var pokemon = ['Charmander', 'Bulbasaur', 'Mewto', 'Squirtle', 'Tyranitar']
var pokeBalls = ['Poke ball', 'Super ball', 'Ultra ball', 'Master ball']

function concat(array1, array2) {
  var newArray = []

  for (var i = 0; i < array1.length; i++) {
    newArray[newArray.length] = array1[i]
  }

  for (var i = 0; i < array2.length; i++) {
    newArray[newArray.length] = array2[i]
  }

  return newArray
}

// You need to declare newArray but leave it empty, and then loop through both variables. 
//The values get added to the new variable. If you assign newArray the value of array1 and then loop through array2 and add the elements, 
//it will modify array1 because arrays are not primitive values and they reference the same place.
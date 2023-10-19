var elements = ['Air', 'Earth', 'Water', 'Fire']

function join(array, separator) {
  var newString = ''
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      newString += array[i]
      return newString
    }
    newString += array[i] + separator
  }
  return newString
}
var sports = ['Football', 'Basketball', 'Boxing', 'MMA']
var moreSports = ['Golf', 'Chess']
function push(array1, elementToPush) {
  if (typeof elementToPush === 'string') {
    array1[array1.length] = elementToPush
    return array1.length
  }
  for (var i = 0; i < elementToPush.length; i++) {
    array1[array1.length] = elementToPush[i]
  }
  return array1.length
}
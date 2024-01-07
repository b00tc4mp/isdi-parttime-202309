//JS6 spread element

function push(array, ...elements) {
  for (var i = 0; i < elements.length; i++) {
    array[array.length] = elements[i]
  }
  return array.length
}

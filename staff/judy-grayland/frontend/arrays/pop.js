function pop(array) {
  if (array.length === 0) return

  var lastItem = array[array.length - 1]
  array.length--

  return lastItem
}

function indexOf(array, searchTerm) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === searchTerm) return i
  }
  return -1
}

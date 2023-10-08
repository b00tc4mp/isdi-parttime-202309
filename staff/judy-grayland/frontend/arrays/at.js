var countries = ['France', 'Ghana', 'Peru', 'Australia', 'Canada', 'India']

function at(array, index) {
  if (index < 0) {
    index = array.length + index
  }
  return array[index]
}

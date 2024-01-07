// JS5 solution using arguments
function push(array) {
  for (var i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i]
  }
  return array.length
}

Curry.prototype.concat = function (arguments) {
  result = []
  for (var i = 0; i < this.length; i++) {
    var element = this[i]
    result[result.length] = element
  }
  for (var j = 0; j < arguments.length; j++) {
    var element = arguments[j]
    result[result.length] = element
  }
  return result
}

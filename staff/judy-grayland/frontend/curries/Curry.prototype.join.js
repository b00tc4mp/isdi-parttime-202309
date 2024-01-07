Curry.prototype.join = function (separator) {
  var newString = ''
  if (separator === undefined) {
    separator = ','
  }
  for (var i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      newString += this[i]
      return newString
    }
    newString += this[i] + separator
  }
  return newString
}

Curry.prototype.pop = function () {
  if (this.length === 0) return

  var lastItem = this[this.length - 1]
  delete this[this.length - 1]
  this.length--

  return lastItem
}

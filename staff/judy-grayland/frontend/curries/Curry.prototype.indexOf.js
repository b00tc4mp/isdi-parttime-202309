Curry.prototype.indexOf = function indexOf(searchTerm) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === searchTerm) return i
  }
  return -1
}

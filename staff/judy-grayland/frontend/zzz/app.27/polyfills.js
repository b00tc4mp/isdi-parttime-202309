if (typeof Array.prototype.forEachReverse === 'undefined') {
  Array.prototype.forEachReverse = function (callback) {
    for (var i = this.length - 1; i > -1; i--)
      // forEach() return three parameters: the element, the index and the array
      callback(this[i], i, this)
  }
}

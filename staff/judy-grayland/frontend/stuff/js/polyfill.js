if (typeof Array.prototype.forEachReversed === 'undefined') {
  Array.prototype.toReverse = function () {
    var reversed = []

    for (var i = this.length - 1; i > -1; i--)
      reversed[this.length - 1 - i] = this[i]

    return reversed
  }
}

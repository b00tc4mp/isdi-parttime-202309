Curry.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var v = this[i]

    callback(v)
  }
}

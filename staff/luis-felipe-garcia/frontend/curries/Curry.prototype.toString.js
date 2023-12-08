Curry.prototype.toString = function () {
    var output = ''
    for (i = 0; i < this.length; i++) {
        output += this[i]
    }
    return output
}
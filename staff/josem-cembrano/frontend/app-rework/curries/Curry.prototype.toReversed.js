Curry.prototype.toReversed = function () {
    var reversed = []
    for (var i = this.length - 1; i > -1; i--) {
        //i = 2, [30]
        //i = 1, [30,20]
        //i = 0, [30,20,10]
        reversed[this.length - 1 - i] = this[i]
    }
    return reversed
}
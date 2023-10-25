Curry.prototype.pop = function pop() {
    var deleted = this[this.length - 1]
    var curry2 = new Curry()

    for (var i = 0; i < this.length - 1; i++) {
        curry2[i] = this[i]
        curry2.length++
    }

    c = curry2

    return deleted
}


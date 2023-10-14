Curry.prototype.pop = function() {
    if (this.length === 0) 
        return

    var element = this[arguments.length] - 1
    this.length--

    return element
}
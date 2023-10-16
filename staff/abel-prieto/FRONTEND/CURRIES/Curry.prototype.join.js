Curry.prototype.join = function(separator) {
    var result = this[0]
    
    if (separator === undefined)
        separator = ","

    for (var i = 1; i < this.length; i++) {
        result += separator + this[i]
    }

    return result
}
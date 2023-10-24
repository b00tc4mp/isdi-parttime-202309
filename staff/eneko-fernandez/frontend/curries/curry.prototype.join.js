Curry.prototype.join = function join(separator) {
    var joinedArray = ''
    if (separator === false || separator === true || separator === null)
        separator = "" + separator


    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            joinedArray += this[i]
        else
            joinedArray += this[i] + separator
    }

    return joinedArray
}


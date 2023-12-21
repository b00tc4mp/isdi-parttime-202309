Curry.prototype.join = function (element) {
    var joinElement = ''
    if (element === undefined)
        element = "-"
    for (var i = 0; i < this.length; i++) {
        joinElement += this[i]
        if (i < this.length - 1) {
            joinElement += element

        }
    }
    return joinElement
}
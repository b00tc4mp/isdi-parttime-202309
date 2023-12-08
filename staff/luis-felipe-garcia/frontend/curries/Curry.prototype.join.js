Curry.prototype.join = function (element) {
    if (!element) var element = ','
    var result = this[0]
    if (this.length >= 1) {
        for (var i = 1; i < this.length; i++) {
            result = result + element + this[i]
        }
    } else result = element.toString()
    return result
}
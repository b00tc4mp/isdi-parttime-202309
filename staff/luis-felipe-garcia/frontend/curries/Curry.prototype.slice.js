Curry.prototype.slice = function (start, end) {
    if (!start || start < -this.length) start = 0
    else if (start < 0) start = this.length + start

    if (!end || end > this.length) end = this.length
    else if (end < 0) end = this.length + end
    else if (end < -this.length) end = 0

    if (start > end || start > this.length) return []

    output = []

    for (var i = start; i < end; i++) {
        output[output.length] = this[i]
    }
    return output
}
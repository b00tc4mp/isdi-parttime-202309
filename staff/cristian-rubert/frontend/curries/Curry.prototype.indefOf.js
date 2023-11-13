Curry.prototype.indexOf = function(index) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === index)
            return this.length
    }
}
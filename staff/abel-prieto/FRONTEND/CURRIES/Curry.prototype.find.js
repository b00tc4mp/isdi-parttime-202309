Curry.prototype.find = function(callback) {
    for (var i = 0; i < this.length; i++) {
        var index = this[i]

        if (callback(index)) {
            return index
        }
    }
}
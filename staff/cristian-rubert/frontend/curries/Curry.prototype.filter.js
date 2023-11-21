Curry.prototype.filter = function(callback) {
    var newCurry = new Curry

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element)) {
            newCurry[newCurry.length] = element
            newCurry.length++
        }
    }

    return newCurry
}


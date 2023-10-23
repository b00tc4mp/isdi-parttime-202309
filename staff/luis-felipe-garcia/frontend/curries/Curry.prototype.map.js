Curry.prototype.map = function (callback) {
    var result =new Curry()
    for (var i = 0; i < this.length; i++){
        var element = this[i]
        result[i] = callback(element)
        result.length++
    }
    return result
}
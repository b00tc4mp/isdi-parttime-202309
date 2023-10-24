Curry.prototype.reverse = function () {
    for (var i = 0; i < Math.floor(this.length / 2); i++) {
        var temp = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = temp;
    }
    return this;
}
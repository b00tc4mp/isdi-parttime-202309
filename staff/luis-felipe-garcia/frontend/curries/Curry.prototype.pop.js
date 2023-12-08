Curry.prototype.pop = function () {
    if (this.length === 0) return 

    var elementToPop = this[this.length - 1]

    delete this[--this.length]   

    return elementToPop
}


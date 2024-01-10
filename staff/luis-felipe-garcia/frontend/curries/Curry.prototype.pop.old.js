Curry.prototype.pop = function () {
    if (this.length === 0) return undefined
    var elementToPop = this[this.length - 1]

    var itemsOfcurryItem = new Curry()
    for (i = 0; i < this.length - 1; i++) {
        itemsOfcurryItem[i] = this[i]
    }

    this = itemsOfcurryItem
    
    this.length = this.length - 1
    return elementToPop
}

/*var a = new Curry(2, 8, 10, 12)
var b = new Curry()
for (i = 0; i < a.length - 1; i++) { b[i] = a[i] }
a = b
a*/
Curry.prototype.indexOf = function indexOf(itemToSearch) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === itemToSearch)
            return i
    }

    return -1
}


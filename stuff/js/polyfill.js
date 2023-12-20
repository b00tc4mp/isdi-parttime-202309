if (typeof Array.prototype.toReversed === 'undefined')
    Array.prototype.toReversed = function () {
        console.log('my reversed')

        var reversed = []

        for (var i = this.length - 1; i > -1; i--)
            reversed[this.length - 1 - i] = this[i]

        return reversed
    }
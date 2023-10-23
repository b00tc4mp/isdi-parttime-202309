class Curry {
    constructor(...items) {
        if (items.length === 1)
            if (Number.isInteger(items[0]) && items[0] >= 0) {
                this.length = items[0]

                return
            } else if (Number.isInteger(items[0]) && items[0] < 0 || typeof items[0] === 'number' && !Number.isInteger(items[0]))
                throw new RangeError('Invalid curry length')

        for (let i = 0; i < items.length; i++) {
            const argument = items[i]

            this[i] = argument
        }

        this.length = items.length
    }
    push(...items) {
        if (items.length) {
            this[this.length] = items[0]
            this.length++

            if (items.length > 1)
                for (var i = 1; i < items.length; i++) {
                    this[this.length] = items[i]
                    this.length++
                }
        }

        return this.length
    }

    pop () {
        if (this.length === 0) return 
    
        let elementToPop = this[this.length - 1]
    
        delete this[--this.length]   
    
        return elementToPop
    }
    
}

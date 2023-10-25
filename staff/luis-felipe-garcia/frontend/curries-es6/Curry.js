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
                for (let i = 1; i < items.length; i++) {
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

    at(index) {
        if (index >= 0) return this[index]
        else return this[this.length + index]
    }

    concat () {
        const output = new Curry()
    
        for (let i = 0; i < this.length; i++) {
            output[i] = this[i]
            output.length++
        }
    
        for (let i = 0; i < arguments.length; i++) {
            for (let j = 0; j < arguments[i].length; j++) {
                output[output.length + this.length] = arguments[i][j]
                output.length++
            }
        }
    
        return output
    }

    filter (callback) {
        const result = new Curry()
        result.length = 0
    
        for (let i = 0; i < this.length; i++) {
            const element = this[i]
    
            if (callback(element)) {
                result[result.length] = element
                result.length++
            }
        }
    
        return result
    }

    find (callback) {
        for (let i = 0; i < this.length; i++) {
            const element = this[i]
    
            if (callback(element))
                return element
        }   
    }

    forEach (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i])
        }
    }

    join (element) {
        if (!element) element = ','
        let result = this[0]
        if (this.length >= 1) {
            for (let i = 1; i < this.length; i++) {
                result = result + element + this[i]
            }
        } else result = element.toString()
        return result
    }
    
    map (callback) {
        let result =new Curry()
        for (let i = 0; i < this.length; i++){
            let element = this[i]
            result[i] = callback(element)
            result.length++
        }
        return result
    }

    slice (start, end) {
        if (!start || start < -this.length) start = 0
        else if (start < 0) start = this.length + start
    
        if (!end || end > this.length) end = this.length
        else if (end < 0) end = this.length + end
        else if (end < -this.length) end = 0
    
        if (start > end || start > this.length) return []
    
        let output = []
    
        for (let i = start; i < end; i++) {
            output[output.length] = this[i]
        }
        return output
    }

    splice (start, removeCount, item) {
        if (removeCount === 0) {
            let displacement = arguments.length - 2
    
            for (let i = this.length - 1; i >= start; i--) {
                let element = this[i]
    
                this[i + displacement] = element
            }
    
            this[start] = item
    
            for (let i = 3; i < arguments.length; i++) {
                let element = arguments[i]
    
                this[start + i - 2] = element
            }
    
            this.length += displacement
    
            return new Curry
        } else if (removeCount === 1 && arguments.length === 3) {
            let elementToRemove = this[start]
    
            this[start] = item
    
            let removed = new Curry
    
            removed[0] = elementToRemove
            removed.length++
    
            return removed
        } else if (removeCount >= 1) {
            let removed = new Curry
    
            for (let i = start; i < this.length - 1; i++) {
                let elementToRemove = this[i]
    
                removed[removed.length] = elementToRemove
                removed.length++
    
                let next = this[i + removeCount]
    
                this[i] = next
            }
    
            for (let i = this.length - removeCount; i < this.length; i++)
                delete this[i]
    
            this.length -= removeCount
    
            return removed
        }
    }

    toString () {
        let output = ''
        for (let i = 0; i < this.length; i++) {
            output += this[i]
        }
        return output
    }

    unshift (...args) {
        let numberOfArguments = args.length
        for (let i = this.length - 1; i > -1; i--) {
            this[i + numberOfArguments] = this[i]
        }
    
        for (let i = 0; i < args.length; i++) {
            this[i] = args[i]
        }
        this.length += args.length
        console.log(this.length)
        return
    }
}

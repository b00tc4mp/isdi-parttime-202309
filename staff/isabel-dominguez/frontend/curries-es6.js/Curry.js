//REVISAR MÉTODOS
//MIRAR LAS VARIABLES DE LOS SPEC
//REVISAR QUE TODO FUNCIONA CORRECTAMENTE

class Curry {
    constructor(...args) {
        if (args.length === 1)
            if (Number.isInteger(args[0]) && args[0] >= 0) {
                this.length = args[0]

                return
            } else if (Number.isInteger(args[0]) && args[0] < 0 || typeof args[0] === 'number' && !Number.isInteger(args[0]))
                throw new RangeError('Invalid curry length')

        for (let i = 0; i < args.length; i++) {
            let argument = args[i]

            this[i] = argument
        }

        this.length = args.length
    }

    at(index) {
        return this[index >= 0 ? index : this.length + index]
    }

    concat() {
        const concatenatedArray = []

        for (let i = 0; i < this.length; i++) {
            concatenatedArray[concatenatedArray.length] = this[i]
        }

        for (let i = 0; i < args.length; i++) {
            const otherArrays = args[i]
            for (let j = 0; j < otherArrays.length; j++) {
                concatenatedArray[concatenatedArray.length] = otherArrays[j]
            }
        }

        return concatenatedArray
    }

    filter(callback) {
        const result = new Curry()

        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            if (callback(element)) {
                result[result.length] = element
                result.length++
            }
        }

        if (result.length === 0) {
            return new Curry()
        }

        return result
    }

    find(callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i])) {
                return this[i]
            }
        }
        return -1
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            const v = this[i]
            callback(v)
        }
    }

    indexOf(searchElement) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === searchElement) {
                return i
            }
        }
        return -1
    }

    join(separator) {
        const result = ""

        if (separator === undefined)
            separator = ","

        for (let i = 0; i < this.length; i++) {
            result += this[i]

            if (i < this.length - 1) {
                result += separator
            }
        }

        return result
    }

    map(callback) {
        const result = new Curry()

        for (let i = 0; i < this.length; i++) {
            result[i] = callback(this[i])
        }

        result.length = this.length
        return result
    }

    pop() {
        if (this.length === 0) return

        const lastElement = this[this.length - 1]

        delete this[--this.length]

        return lastElement
    }

    push(...items) {
        if (items.length) {
            for (let i = 0; i < items.length; i++) {
                this[this.length] = items[i];
                this.length++;
            }
        }
        return this.length;
    }

    reverse() {
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            const forwardElement = this[i]
            this[i] = this[this.length - 1 - i]
            this[this.length - 1 - i] = forwardElement
        }

        return this
    }

    slice(start, end) {
        start = start || 0
        end = end || this.length

        const slicedCurry = new Curry()

        for (let i = start; i < end; i++) {
            if (i < 0 || i >= this.length) {
            }

            slicedCurry[slicedCurry.length] = this[i]
            slicedCurry.length++
        }

        return slicedCurry
    }

    splice(start, removeCount, ...item) {
        if (start < 0) {
            start = this.length + start
            if (start < 0) {
                start = 0
            }
        }

        const removed = new Curry()

        for (let i = start; i < start + removeCount; i++) {
            removed.push(this[i])
        }

        if (removeCount > 0) {
            for (let i = start + removeCount; i < this.length; i++) {
                this[i - removeCount] = this[i]
            }
            this.length -= removeCount
        }

        if (item.length > 0) {
            for (let i = this.length - 1; i >= start; i--) {
                this[i + item.length - removeCount] = this[i]
            }
            for (let i = 0; i < item.length; i++) {
                this[start + i] = item[i]
            }
            this.length += item.length - removeCount
        }

        return removed
    }
}

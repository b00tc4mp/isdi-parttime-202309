//REVISAR MÉTODOS
//APLICAR PEPETEST A TODOS
//MIRAR LAS VARIABLES DE LOS SPEC


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
            let otherArrays = args[i]
            for (let j = 0; j < otherArrays.length; j++) {
                concatenatedArray[concatenatedArray.length] = otherArrays[j]
            }
        }

        return concatenatedArray
    }

    filter(callback) {
        let result = new Curry()

        for (let i = 0; i < this.length; i++) {
            let element = this[i]

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
            let v = this[i]
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
        let result = ""

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
        let result = new Curry()

        for (let i = 0; i < this.length; i++) {
            result[i] = callback(this[i])
        }

        result.length = this.length
        return result
    }

    pop() {
        if (this.length === 0) return

        let lastElement = this[this.length - 1]

        delete this[--this.length]

        return lastElement
    }

    push(item) {
        if (args.length) {
            this[this.length] = item
            this.length++

            if (args.length > 1)
                for (let i = 1; i < args.length; i++) {
                    this[this.length] = args[i]
                    this.length++
                }
        }

        return this.length
    }

    reverse() {
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            let forwardElement = this[i]
            this[i] = this[this.length - 1 - i]
            this[this.length - 1 - i] = forwardElement
        }

        return this
    }

    slice(start, end) {
        start = start || 0
        end = end || this.length

        let slicedCurry = new Curry()

        for (let i = start; i < end; i++) {
            if (i < 0 || i >= this.length) {
            }

            slicedCurry[slicedCurry.length] = this[i]
            slicedCurry.length++
        }

        return slicedCurry
    }

    splice(start, removeCount, item) {
        if (start < 0) {
            start = this.length + start;
            if (start < 0) {
                start = 0
            }
        }

        if (removeCount === 0) {
            let displacement = args.length - 2

            for (let i = this.length - 1; i >= start; i--) {
                let element = this[i]

                this[i + displacement] = element
            }

            this[start] = item

            for (let i = 3; i < args.length; i++) {
                let element = args[i]

                this[start + i - 2] = element
            }

            this.length += displacement

            return new Curry
        } else if (removeCount === 1 && args.length === 3) {
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
}
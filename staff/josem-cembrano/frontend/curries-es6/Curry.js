class Curry {
    constructor(...args) {
        if (args.length === 1)
            if (Number.isInteger(args[0]) && args[0] >= 0) {
                this.length = args[0]

                return
            } else if (Number.isInteger(args[0]) && args[0] < 0 || typeof args[0] === 'number' && !Number.isInteger(args[0]))
                throw new RangeError('Invalid curry length')

        for (let i = 0; i < args.length; i++) {
            const argument = args[i]

            this[i] = argument
        }

        this.length = args.length
    }

    at(index) {
        return this[index >= 0 ? index : this.length + index]
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            const v = this[i]
            callback(v)
        }
    }

    join(separator) {
        joinedString = ''

        if (separator === undefined)
            separator = ','

        if (c.length === 0)
            return ''

        if (c.length === 1)
            return c.toString()

        for (let i = 0; i < c.length; i++) {
            joinedString += c[i]

            if (i < c.length - 1)
                joinedString += separator
        }
        return joinedString
    }

    pop() {
        if (!this.length) return

        let last = this[this.length - 1]

        delete this[--this.length]

        return last
    }

    push(item) {
        if (arguments.length) {
            this[this.length] = item
            this.length++

            if (arguments.length > 1)
                for (let i = 1; i < arguments.length; i++) {
                    this[this.length] = arguments[i]
                    this.length++
                }
        }

        return this.length
    }

    reverse() {
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            let temp = this[i];
            this[i] = this[this.length - 1 - i];
            this[this.length - 1 - i] = temp;
        }
        return this;
    }

    splice(start, removeCount, item, ...args) {
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

    toReversed() {
        let reversed = []
        for (let i = this.length - 1; i > -1; i--) {
            //i = 2, [30]
            //i = 1, [30,20]
            //i = 0, [30,20,10]
            reversed[this.length - 1 - i] = this[i]
        }
        return reversed
    }

    indexOf(element) {
        for (let i = 0; i < c.length; i++) {
            if (element === c[i])
                return i
        }
        return -1
    }

    slice(start, end, ...args) {
        if (args.length === 0)
            start = 0

        if (start === null || start === undefined || start === false || typeof start === 'string')
            start = 0

        if (start === true)
            start = 1

        if (end === null || end === undefined || end === false || typeof end === 'string')
            end = 0

        if (end === true)
            end = 1

        if (!Number.isInteger(args[0]))
            if (start > 0) {
                start = '' + start + ''
                start = start[0]
            } else if (start < 0) {
                start = '' + start + ''
                start = start[0] + start[1]
            }
        start = Number(start)

        if (!Number.isInteger(args[1]))
            if (end > 0) {
                end = '' + end + ''
                end = end[0]
            } else if (start < 0) {
                end = '' + end + ''
                end = end[0] + end[1]
            }
        end = Number(end)

        if (args.length > 2)
            args.length = 2

        if (args.length === 1) {
            if (start < 0)
                start = start + c.length

            slicedArray = []
            for (let i = start; i < c.length; i++) {
                slicedArray[slicedArray.length] = c[i]
            }
            return slicedArray
        } else if (args.length === 2 || args.length === 0) {
            if (start < 0)
                start = start + c.length

            if (end < 0)
                end = end + c.length

            if (start === 0)
                end = c.length

            slicedArray = []
            for (let i = start; i < end; i++) {
                slicedArray[slicedArray.length] = c[i]
            }
            return slicedArray
        }
    }

    map(callback) {
        switch (typeof callback) {
            case 'function':
                mappedArray = []
                for (let i = 0; i < c.length; i++)
                    mappedArray[i] = callback(c[i])

                return mappedArray
            case 'undefined':
                throw new TypeError('undefined is not a function')
            case 'string':
                throw new TypeError('string "' + callback + '" is not a function')
            case 'number':
                throw new TypeError('number ' + callback + ' is not a function');
            case 'object':
                throw new TypeError('object ' + callback + ' is not a function');
            case 'boolean':
                throw new TypeError('boolean ' + callback + ' is not a function');
            default:
        }
    }

    concat(curry1, curry2) {
        newCurry = new Curry()
        for (let i = 0; i < curry1.length; i++) {
            newCurry[newCurry.length] = curry1[i]
        }
        for (let i = 0; i < curry2.length; i++) {
            newCurry[newCurry.length] = curry2[i]
        }

        return newCurry
    }

    find(callback) {
        switch (typeof callback) {
            case 'function':
                for (let i = 0; i < c.length; i++) {
                    if (callback(c[i]))
                        return c[i]
                }
            case 'undefined':
                throw new TypeError('undefined is not a function')
            case 'string':
                throw new TypeError('string "' + callback + '" is not a function')
            case 'number':
                throw new TypeError('number ' + callback + ' is not a function');
            case 'object':
                throw new TypeError('object ' + callback + ' is not a function');
            case 'boolean':
                throw new TypeError('boolean ' + callback + ' is not a function');
            default:
        }
    }

}
class Curry {
    constructor(...args) {
        if (args.length === 1)

            // 1 Argumento - Entero - Positivo
            if (Number.isInteger(args[0]) && args[0] >= 0) { 
                this.length = args[0]

                return
        
            // 1 Argumento - Entero - Negativo || 1 Argumento - Numérico -  
            } else if (Number.isInteger(args[0]) && args[0] < 0 || typeof args[0] === 'number' && !Number.isNaN(args[0])) { 
                throw new Error('Invalid curry length')
            }

        // 2 o más Argumentos
        for (let i = 0; i < args.length; i++) {
            const argument = args[i]
        
            this[i] = argument
        }
        
        this.length = args.length
    }
    // Method AD
    at(index) {
        return this[index >= 0 ? index : this.length + index]
    }
    // Method FILTER
    filter(callback) {
        var newCurry = new Curry
    
        for (let i = 0; i < this.length; i++) {
            const element = this[i]
    
            if (callback(element)) {
                newCurry[newCurry.length] = element
                newCurry.length++
            }
        }
    
        return newCurry
    }
    // Method FIND
    find(callback) {
        for (let i = 0; i < this.length; i++) {
            const index = this[i]
    
            if (callback(index)) {
                return index
            }
        }
    }
    // Method FOR-EACH
    forEach(...args) {
        for (let i = 0; i < args.length; i++) {
            var index = args[i]
    
            console.log(index)
        }
    }
    // Method INDEX-OF
    indexOf(index) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === index)
                return this.length
        }
    }
    // Method JOIN
    join(separator) {
        let result = this[0]
        
        if (separator === undefined)
            separator = ","
    
        for (let i = 1; i < this.length; i++) {
            result += separator + this[i]
        }
    
        return result
    }
    // Method MAP
    map(callback) {
        let newCurry = new Curry()
    
        for (let i = 0; i < this.length; i++) {
            const element = this[i]
    
            newCurry[i] = callback(element)
            newCurry.length++
        }
    
        return newCurry
    }
    // Method POP
    pop() {
        if (this.length === 0) {
            return 
        }
        
        let lastElement = this[this.length - 1]
        delete this[this.length - 1];

        this.length--
        
        return lastElement
    }
    // Method PUSH
    push(...items) {
        if (items.length === 0) {
            return this.length
        }
    
        this[this.length] = items[0] // Primer item
    
        this.length++
        
        if (items.length > 1) {
            for (let i = 1; i < items.length; i++) {
                this[this.length] = items[i]
    
                this.length++
            }
    
        }
    
        return this.length
    }
    // Method SLICE
    slice(start, end) {
        let newCurry = new Curry()
    
        if (start > this.length) {
            return newCurry
        }
    
        if (start === null) {
            for (let i = 0; i < end; i++) {
                newCurry[newCurry.length] = this[i]
    
            }
        }
    
        for (let i = start; i < end; i++) {
            newCurry[newCurry.length] = this[i]
            newCurry.length++
    
        }
    
        return newCurry
    }
    // Method SPLICE (PEND. REVISAR AÚN)
    splice(start, removeCount, ...items) {
        if (removeCount === 0) {
            let displacement = items.length - 2
    
            for (let i = this.length - 1; i >= start; i--) {
                const element = this[i]
    
                this[i + displacement] = element
            }
    
            this[start] = items[0]
    
            for (let i = 3; i < items.length; i++) {
                const element = items[i]
    
                this[start + i - 2] = element
            }
    
            this.length += displacement
    
            return new Curry
    
        } else if (removeCount === 1 && items.length === 3) {
            let elementToRemove = this[start]
    
            this[start] = items[0]
    
            let removed = new Curry
    
            removed[0] = elementToRemove
            removed.length++
    
            return removed
        } else if (removeCount >= 1) {
            let removed = new Curry
    
            for (let i = start; i < this.length - 1; i++) {
                const elementToRemove = this[i]
    
                removed[removed.length] = elementToRemove
                removed.length++
    
                const next = this[i + removeCount]
    
                this[i] = next
            }
    
            for (let i = this.lenght - 1; i >= this.length - removeCount; i--) {
                delete this[i]
            }
    
            this.length -= removeCount
    
            return removed
        }
    }
}

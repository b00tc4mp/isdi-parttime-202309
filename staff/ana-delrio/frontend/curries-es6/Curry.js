// cambiamos de arguments a args
// cambiamos var a let
// cambiamos para los elementos que no cambian por const

class Curry {
    constructor(...args) {
        // Comprobamos si se proporciona un solo argumento y es un número entero no negativo
        if (args.length === 1)
            if (Number.isInteger(args[0]) && args[0] >= 0) {
                // Si se cumple la condición, establecemos la propiedad 'length' de la instancia en el valor proporcionado
                this.length = args[0]

                return // sale del cosntructor
            } else if (Number.isInteger(args[0]) && args[0] < 0 || typeof args[0] === 'number' && !Number.isInteger(args[0]))
                // Si el argumento no es un número entero no negativo, arrojamos un error
                throw new RangeError('Invalid curry length')

        // Si no se proporcionó un solo argumento válido, se ejecuta el siguiente código
        for (let i = 0; i < args.length; i++) {
            const argument = args[i]

            this[i] = argument
        }

        this.length = args.length
    }


    // Definición del método 'push' en la clase 'Curry'
    push(...items) {
        if (items.length) {
            // Agregar el primer elemento al final de la instancia 'this'
            this[this.length] = items[0]
            // incrementamos el valor de la propiedad length
            this.length++

            // Si se proporcionaron más de un elemento, los agregamos a la instancia 'this'
            if (items.length > 1)
                for (let i = 1; i < items.length; i++) {
                    this[this.length] = items[i]
                    this.length++
                }
        }

        return this.length
    }


    pop() {
        if (!this.length) return

        // Almacenamos el último elemento en la instancia 'this' en la variable 'last'
        const last = this[this.length - 1]

        // Eliminamos el último elemento de la instancia 'this'
        delete this[--this.length]

        return last
    }

    splice(start, removeCount, item) {
        if (removeCount === 0) {
            var displacement = arguments.length - 2

            for (var i = this.length - 1; i >= start; i--) {
                var element = this[i]

                this[i + displacement] = element
            }

            this[start] = item

            for (var i = 3; i < arguments.length; i++) {
                var element = arguments[i]

                this[start + i - 2] = element
            }

            this.length += displacement

            return new Curry
        } else if (removeCount === 1 && arguments.length === 3) {
            var elementToRemove = this[start]

            this[start] = item

            var removed = new Curry

            removed[0] = elementToRemove
            removed.length++

            return removed
        } else if (removeCount >= 1) {
            var removed = new Curry

            for (var i = start; i < this.length - 1; i++) {
                var elementToRemove = this[i]

                removed[removed.length] = elementToRemove
                removed.length++

                var next = this[i + removeCount]

                this[i] = next
            }

            for (var i = this.length - removeCount; i < this.length; i++)
                delete this[i]

            this.length -= removeCount

            return removed
        }
    }
}
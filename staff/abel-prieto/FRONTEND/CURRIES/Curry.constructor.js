function Curry() {
    if (arguments.length === 1)
        // 1 Argumento - Entero - Positivo
        if (Number.isInteger(arguments[0]) && arguments[0] >= 0) { 
            this.length = arguments[0]

            return
        
        // 1 Argumento - Entero - Negativo || 1 Argumento - Numérico -  
        } else if (Number.isInteger(arguments[0]) && arguments[0] < 0 || typeof arguments[0] === 'number' && !Number.isNaN(arguments[0])) { 
            throw new Error('Invalid curry length')
        }

    // 2 o más Argumentos
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]
        
        this[i] = argument
    }
        
    this.length = arguments.length
}



function Curry(...args) {
    if (args.length === 1) {
        if (Number.isInteger(args[0]) && args[0] >= 0) {
            this.length = args[0];
            return;
        } else if (Number.isInteger(args[0]) && args[0] < 0 || typeof args[0] === 'number' && !Number.isInteger(args[0])) {
            throw new RangeError('Invalid curry length');
        }
    }

    for (let i = 0; i < args.length; i++) {
        const argument = args[i];
        this[i] = argument;
    }

    this.length = args.length;
}

// En este ejemplo, se ha utilizado la sintaxis de "rest parameters" (...args) en lugar de arguments para obtener los argumentos de la función. 

// Además, se ha cambiado var a let y const para declarar variables, haciendo uso de la sintaxis de ES6. 
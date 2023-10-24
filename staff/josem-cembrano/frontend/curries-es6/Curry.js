class Curry {
    constructor(...args) {
        if (args.length === 1)
            if (Number.isInteger(args[0]) && args[0] >= 0) {
                this.length = args[0]

                return
            } else if (Number.isInteger(args[0]) && args[0] < 0 || typeof args[0] === 'number' && !Number.isInteger(args[0]))
                throw new RangeError('Invalid curry length')

        for (var i = 0; i < args.length; i++) {
            var argument = args[i]

            this[i] = argument
        }

        this.length = args.length
    }
}
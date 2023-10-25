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




}
const retrieveUser = require('./retrieveUser')

try {
	retrieveUser('206s36wbyvpc', (error, user) => {
		if (error) {
			console.error(error)

			return
		}

		console.log('retrieved', user)
	})
} catch (error) {
	console.error(error)
}
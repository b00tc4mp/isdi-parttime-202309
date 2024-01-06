const authenticateUser = require('./authenticateUser')

try {
	authenticateUser('peter@pan.com', '123123123', (error, userId) => {

		if (error) {
			console.error(error)
			return
		}
		console.log('user authenticated', userId)
	})
} catch (error) {
	console.log(error)
}
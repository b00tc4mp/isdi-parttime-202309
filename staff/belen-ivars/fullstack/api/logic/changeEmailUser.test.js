import changeEmailUser from './changeEmailUser.js'

try {
	changeEmailUser('206s36wbyvpc', 'cala@bacin.com', 'cara@basseta.com', 'cara@basseta.com', (error, userId) => {
		if (error) {
			console.error(error)

			return
		}
		console.log('email changed', userId)

	})
} catch (error) {
	console.log(error)
}
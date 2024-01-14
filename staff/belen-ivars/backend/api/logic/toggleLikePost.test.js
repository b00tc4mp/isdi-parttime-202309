const toggleLikePost = require('./toggleLikePost')

try {
	toggleLikePost('659b348c696ad77021d9e2f8', '659ac06c0e890e8a7a2ddaaa', error => {
		if (error) {
			console.error(error)

			return
		}

		console.log('post like toggled')
	})
} catch (error) {
	console.error(error)
}
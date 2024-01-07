const toggleLikePost = require('./toggleLikePost')

try {
	toggleLikePost('206s36wbyvpc', '5430cj18p5k0', error => {
		if (error) {
			console.error(error)

			return
		}

		console.log('post like toggled')
	})
} catch (error) {
	console.error(error)
}
const retrievePosts = require('./retrievePosts')

try {
	retrievePosts('206s36wbyvpc', (error, posts) => {
		if (error) {
			console.error(error)

			return
		}

		console.log('retrieved', posts)
	})
} catch (error) {
	console.error(error)
}
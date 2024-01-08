const { validateText, validateFunction } = require('./helpers/validators')

function createPost(userId, image, text, callback) {
	validateText(userId, 'user id')
	validateText(image, 'image')
	validateText(text, 'text')
	validateFunction(callback, 'callback')

	// TODO use model

	/* JSON.parseFromFile('./data/users.json', (error, users) => {
		if (error) {
			console.error(error)

			return
		}

		const user = users.find(user => user.id === userId)

		if (!user) {
			callback(new Error('user not found'))

			return
		}

		JSON.parseFromFile('./data/posts.json', (error, posts) => {
			if (error) {
				callback(error)

				return
			}

			const post = {
				id: generateId(),
				author: userId,
				image,
				text,
				likes: []
			}

			posts.push(post)

			JSON.stringifyToFile('./data/posts.json', posts, error => {
				if (error) {
					callback(error)

					return
				}

				callback(null)

			})
		})
	}) */
}

module.exports = createPost
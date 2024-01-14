const { validateText, validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')
const { SystemError, NotFoundError } = require('../utils/errors')

function retrievePosts(userId, callback) {
	validateText(userId, 'user id')
	validateFunction(callback, 'callback')

	JSON.parseFromFile('./data/users.json', (error, users) => {
		if (error) {
			callback(new SystemError(error.message))

			return
		}

		const user = users.find(user => user.id === userId)

		if (!user) {
			callback(new NotFoundError('user not found'))

			return
		}
		JSON.parseFromFile('./data/posts.json', (error, posts) => {
			if (error) {
				callback(new SystemError(error.message))

				return
			}

			posts.forEach(post => {
				post.liked = post.likes.includes(userId)

				const author = users.find(user => user.id === post.author)

				// TODO what if the author suddenly does not exist?

				post.author = {
					id: author.id,
					name: author.name
				}

				post.fav = user.favs.includes(post.id)
			})

			callback(null, posts)
		})

	})
}

module.exports = retrievePosts
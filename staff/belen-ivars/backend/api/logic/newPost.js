const CSV = require('../utils/CSV')
const generateId = require('../data/generateId')
const { validateText, validateFunction } = require('../utils/validators')

function newPost(userId, image, text, callback) {
	validateText(userId, 'user id')
	validateText(image, 'image')
	validateText(text, 'text')
	validateFunction(callback, 'callback')

	CSV.loadAsObject('./data/posts.csv', (error, posts) => {
		if (error) {
			callback(error)

			return
		}

		let post = {
			id: generateId(),
			user,
			image,
			text,
		}

		posts.push(post)

		CSV.saveFromObject('./data/posts.csv', posts, error => {
			if (error) {
				callback(error)

				return
			}

			callback(null)

		})
	})
}

module.exports = newPost
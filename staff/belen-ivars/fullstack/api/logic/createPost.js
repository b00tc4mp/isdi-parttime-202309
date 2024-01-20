import { User, Post } from '../data/models.js'
import { NotFoundError, SystemError } from './errors.js'
import validate from './helpers/validate.js'

function createPost(userId, image, text, callback) {
	validate.id(userId, 'user id')
	validate.text(image, 'image')
	validate.text(text, 'text')
	validate.funktion(callback, 'callback')

	User.findById(userId).lean()
		.then(user => {
			if (!user) {
				callback(new NotFoundError('user not found'))

				return
			}

			Post.create({ author: userId, image, text })
				.then(() => callback(null))
				.catch(error => callback(new SystemError(error.message)))
		})
		.catch(error => callback(new SystemError(error.message)))
}

export default createPost
import { User, Post } from '../data/models.js'
import { NotFoundError, SystemError } from './errors.js'
import validate from './helpers/validate.js'

function createPost(userId, image, text) {
	validate.id(userId, 'user id')
	validate.text(image, 'image')
	validate.text(text, 'text')

	return User.findById(userId).lean()
		.catch(error => { throw new SystemError(error.message) })
		.then(user => {
			if (!user)
				throw new NotFoundError('user not found')

			return Post.create({ author: userId, image, text })
				.catch(error => { throw new SystemError(error.message) })
		})
		.then(() => { })
}

export default createPost
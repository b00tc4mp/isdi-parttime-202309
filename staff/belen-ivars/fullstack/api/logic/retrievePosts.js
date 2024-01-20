const validate = require('./helpers/validate')

const { User, Post } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')

function retrievePosts(userId, callback) {
	validate.id(userId, 'user id')
	validate.funktion(callback, 'callback')

	User.findById(userId).lean()
		.then(user => {
			if (!user) {
				callback(new NotFoundError('user not found'))

				return
			}
			Post.find().populate('author', 'name').lean()
				.then(posts => {
					posts.forEach(post => {
						post.id = post._id.toString()
						delete post._id

						if (post.author._id) {
							post.author.id = post.author._id.toString()
							delete post.author._id
						}
						delete post.__v

						post.likes = post.likes.map(userObjectId => userObjectId.toString())
						post.liked = post.likes.includes(userId)

						post.fav = user.favs.some(postObjectId => postObjectId.toString() === post.id)
					})

					callback(null, posts)
				})
				.catch(error => callback(new SystemError(error.message)))
		})
		.catch(error => callback(new SystemError(error.message)))
}

module.exports = retrievePosts
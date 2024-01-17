const validate = require('./helpers/validate')

const { SystemError } = require('./errors')

const { Post, User } = require('../data/models')

function createPost(userId, image, text, callback) {
    validate.id(userId, 'user id')
    validate.text(image, 'image')
    validate.text(text, 'text')
    validate.function(callback, 'callback')

    User.findById(userId).lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }
            const post = new Post({ author: userId, image, text })

            post.save()

                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })

        .catch(error => callback(new SystemError(error.message)))


}

module.exports = createPost

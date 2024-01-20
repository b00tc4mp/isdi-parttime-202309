
const { User, Post } = require('../data/models')
const { NotFoundError, SystemError, CredentialsError } = require("./errors")
const { validateId, validateFunction, validateText } = require("./helpers/validators")

function updatePostText(userId, postId, text, callback) {
    validateId(userId, 'user id')
    validateId(postId, 'post id')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    Post.findById(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('post id not found'))
                return
            }

            else if (post.author.toString() !== userId) {
                callback(new CredentialsError('post do not belong to the user'))
                return
            }

            post.text = text
            post.save()
                .then(callback(null))
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))

}

module.exports = updatePostText


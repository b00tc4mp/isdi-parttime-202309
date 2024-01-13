const validate = require('./helpers/validate')
const { SystemError, NotFoundError } = require('./errors')
const { User, Post } = require('../data/models')

function deletePost(userId, postId, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.function(callback, 'callback')

    User.find({ 'favs': postId })
        .then(users => {

            users.forEach(user => {
                const postFavIndex = user.favs.indexOf(postId)
                user.favs.splice(postFavIndex, 1)

                user.save()
            })

            Post.findByIdAndDelete(postId)
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('post not found'))

                        return
                    }

                    callback(null)
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = deletePost
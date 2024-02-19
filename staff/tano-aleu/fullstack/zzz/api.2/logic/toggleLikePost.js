const { User, Post } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")
const { validateText, validateFunction } = require("./helpers/validators")


function toggleLikePost(userId, postId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    User.findById(userId).lean()
        .then(user => {
            if (!user) {

                callback(new NotFoundError('user not found'))
                return
            }

            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('post not found'))

                        return
                    }

                    const index = post.likes.findIndex(userObjectId => userObjectId.toString() === userId)

                    if (index < 0)

                        post.likes.push(userId)

                    else

                        post.likes.splice(index, 1)

                    post.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))


                })

                .catch(error => callback(new SystemError(error.message)))

        })

        .catch(error => callback(new SystemError(error.message)))


}

module.exports = toggleLikePost
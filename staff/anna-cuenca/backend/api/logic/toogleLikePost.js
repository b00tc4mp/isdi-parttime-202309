
const { NotFoundError, SystemError } = require("./errors");
const { validateText, validateFunction, validateId } = require("./helpers/validators");
const { User, Post } = require('../data/models')




function toggleLikePost(userId, postId, callback) {
    validateId(userId, "user id")
    validateId(postId, "post id")
    validateFunction(callback, "callback")



    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }

            Post.findById(postId)
                .then(post => {
                    if (!post) {

                        callback(new NotFoundError('Post not found'))
                    }

                    let index = post.likes.indexOf(userId)

                    if (index !== -1) {
                        post.likes.splice(index, 1)
                    } else {
                        post.likes.push(userId)
                    }

                    post.save()

                })

            callback(null)

        })
        .catch(error => callback(new SystemError(error.message)))


}



module.exports = toggleLikePost
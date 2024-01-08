const { NotFoundError, SystemError } = require("./errors");
const { validateText, validateFunction, validateId } = require("./helpers/validators");
const { User, Post } = require('../data/models')




function toggleFavPost(postId, userId, callback) {

    validateId(postId, "post id")
    validateId(userId, "user id")
    validateFunction(callback, "callback")



    Post.findById(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('Post not found'))
                return
            }

            User.findById(userId)
                .then(user => {
                    if (!user) {

                        callback(new NotFoundError('User not found'))
                    }

                    let index = user.favs.indexOf(postId)

                    if (index !== -1) {
                        user.favs.splice(index, 1)
                    } else {
                        user.favs.push(postId)
                    }

                    user.save()

                })

            callback(null)

        })
        .catch(error => callback(new SystemError(error.message)))


}



module.exports = toggleFavPost
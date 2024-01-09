const { User, Post } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')
const { validateText, validateFunction } = require('./helpers/validators')

function deletePost(userId, postId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    User.find().lean()
        .then(users => {
            const user = users.find(user => userId === user.id)

            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            users.forEach(user => {
                if (user.favs.includes(postId)) {
                    const postFavIndex = user.favs.indexOf(postId)

                    user.favs.splice(postFavIndex, 1)
                }

                user.save()
                    .then(() => {
                        Post.findByIdAndDelete(postId).lean()
                            .then(post => {
                                if (!post) {
                                    callback(new NotFoundError('post not found'))

                                    return
                                }

                                callback(null)
                            })
                            .catch(error => callback(new SystemError(error.message)))
                    .catch(error => callback(new SystemError(error.message)))
                    })
            })
        .catch(error => callback(new SystemError(error.message)))
        })
    }

    // Post.findByIdAndDelete(postId).lean()
    //     .then(post => {
    //         if (!post) {
    //             callback(new NotFoundError('post not found'))

    //             return
    //         }

    //         // if (post.author !== userId) {
    //         //     callback(new CredentialsError('this post is from other owner'))

    //         //     return
    //         // }

    //         User.find().lean()
    //             .then(users => {

    //                 const user = users.find(user => userId === user.id)

    //                 if (!user) {
    //                     callback(new NotFoundError('user not found'))

    //                     return
    //                 }

    //                 users.forEach(user => {
    //                     if (user.favs.includes(postId)) {
    //                         const postFavIndex = user.favs.indexOf(postId)

    //                         user.favs.splice(postFavIndex, 1)
    //                     }

    //                     user.save()
    //                         .then(() => {
    //                             callback(null)
    //                         })
    //                         .catch(error => callback(new SystemError(error.message)))
    //                 })
    //             })
    //             .catch(error => new SystemError(error.message))
    //     })
    //     .catch(error => callback(new SystemError(error.message)))
    // }


module.exports = deletePost
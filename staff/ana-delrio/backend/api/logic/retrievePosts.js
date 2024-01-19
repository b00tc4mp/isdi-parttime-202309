
const { validateFunction, validateId } = require('./helpers/validators')
const { User, Post } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors')


function retrievePosts(userId, callback) {
    validateId(userId, 'user id')
    validateFunction(callback, 'callback')

    // lean(), in a Mongoose query, the Mongoose instance is removed and a simple JavaScript object is obtained
    // This can be beneficial in terms of performance, as flat objects are lighter
    User.findById(userId).lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }
            // sanemanos/normalizamos las propiedades que no nos interesan en posts
            Post.find().populate('author', 'name').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        if (post.author.id) {
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
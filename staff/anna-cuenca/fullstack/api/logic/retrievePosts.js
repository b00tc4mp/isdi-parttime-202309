const { validateText, validateFunction, validateId } = require('./helpers/validators')
const { User, Post } = require('../data/models')
const { SystemError, NotFoundError } = require('./errors.js')

function retrievePosts(userId, callback) {
    validateId(userId, 'user id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'))
                return
            }

            Post.find().populate('author', 'name').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString();
                        delete post._id;

                        if (post.author && post.author._id) {
                            post.author.id = post.author._id.toString();
                            delete post.author._id;
                        }

                        delete post.__v;

                        post.likes = post.likes.map(userObjectId => userObjectId.toString());

                        post.liked = post.likes.includes(userId);
                        post.faved = user.favs.some(fav => fav.toString() === post.id);

                    })
                    callback(null, posts)

                })


        })

        .catch(error => callback(new SystemError(error.message)))


}

module.exports = retrievePosts
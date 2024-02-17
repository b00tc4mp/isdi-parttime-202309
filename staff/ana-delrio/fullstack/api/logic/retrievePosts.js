import { validate, errors } from 'com'

import { User, Post } from '../data/models.js'

const { SystemError, NotFoundError, CredentialsError } = errors


function retrievePosts(userId) {
    validate.id(userId, 'user id')

    // lean(), in a Mongoose query, the Mongoose instance is removed and a simple JavaScript object is obtained
    // This can be beneficial in terms of performance, as flat objects are lighter
    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            return Post.find().populate('author', 'name').select('-__v').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        // this code checks if the _id property exists on the post.author object
                        // If it exists, update the id property with the string value of _id
                        // then remove the _id property

                        if (post.author._id) {
                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }

                        post.likes = post.likes.map(userObjectId => userObjectId.toString())
                        post.liked = post.likes.includes(userId)

                        post.fav = user.favs.some(postObjectId => postObjectId.toString() === post.id)
                    })

                    return posts
                })
        })
}

export default retrievePosts
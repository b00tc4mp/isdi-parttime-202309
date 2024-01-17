import { User, Post } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'
import validate from './helpers/validate.js'


function toggleLikePost(userId, postId, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.function(callback, 'callback')

    User.findById(userId)
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

                    const userIndex = post.likes.indexOf(userId)

                    if (userIndex < 0) {
                        post.likes.push(userId)
                    } else {
                        post.likes.splice(userIndex, 1)
                    }

                    post.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
    
}

export default toggleLikePost
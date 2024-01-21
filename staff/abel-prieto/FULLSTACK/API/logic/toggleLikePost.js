import { User, Post } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'
import validate from './helpers/validate.js'


function toggleLikePost(userId, postId) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message)} )
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }
            
            Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
                .then(post => {
                    if (!post) {
                        throw new NotFoundError('post not found')
                    }

                    const userIndex = post.likes.indexOf(userId)

                    if (userIndex < 0) {
                        post.likes.push(userId)
                    } else {
                        post.likes.splice(userIndex, 1)
                    }

                    post.save()
                        .catch(error => { throw new SystemError(error.message) })
                        .then(post => { })
                })
        })    
}

export default toggleLikePost
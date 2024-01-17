import { User, Post } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'
import validate from './helpers/validate.js'

function deletePost(userId, postId, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.function(callback, 'callback')

    User.find({'favs': postId })
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
    
export default deletePost
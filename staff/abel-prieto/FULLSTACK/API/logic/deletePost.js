import { User, Post } from '../data/models.js'
import { SystemError, NotFoundError } from './errors.js'
import validate from './helpers/validate.js'

function deletePost(userId, postId) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')

    return Post.findByIdAndDelete(postId)
        .catch(error => { throw new SystemError(error.message) })
        .then(post => {
            if (!post) {
                throw new NotFoundError('post not found')
            }

            return User.find({ 'favs': postId })
                .catch(error => { throw new SystemError(error.message) })
                .then(users => {

                    for (const user of users) {
                        const postFavIndex = user.favs.indexOf(postId)
                        user.favs.splice(postFavIndex, 1)

                        return user.save()
                            .catch(error => { throw new SystemError(error.message) })
                            .then(user => { })
                    }
                })
        })
}
    
export default deletePost
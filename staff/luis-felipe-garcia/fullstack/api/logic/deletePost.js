import { User, Post } from '../data/models.js'
import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError } from './errors.js'


function deletePost(userId, postId, callback) {
    validate.id(postId)
    validate.function(callback)

    Post.findById(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('post id not found'))
                return
            }

            User.findById(userId)
                .then(user => {
                    if (!user) {
                        callback(new NotFoundError('user id not found'))
                        return
                    }

                    if (post.author.toString() !== userId) {
                        callback(new CredentialsError('post do not belong to user id'))
                        return
                    }

                    User.updateMany({ favs: postId }, { $pull: { favs: postId } })
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))

                    // DESCOMENTAR PARA BORRAR
                    // post.deleteOne({ _id: postId })
                    //     .then(callback(null))
                    //     .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))





}

export default deletePost
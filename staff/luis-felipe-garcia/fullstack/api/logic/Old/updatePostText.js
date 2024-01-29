import { User, Post } from '../../../../../../api/data/models.js'
import validate from './helpers/validate.js'
import { SystemError, CredentialsError, NotFoundError, ContentError } from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/errors.js'

function updatePostText(userId, postId, text, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.text(text, 'text')
    validate.function(callback, 'callback')

    Post.findById(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('post id not matched'))
                return
            }

            if (post.author.toString() !== userId) {
                callback(new CredentialsError('post do not belong to user'))
                return
            }

            post.text = text
            post.save()
                .then(callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

export default updatePostText
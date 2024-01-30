import validate from './helpers/validate.js'
import { Post } from '../../../../../../api/data/models.js'
import { SystemError } from '../../../zzzzz/Copy8_antes_clases_semana_26_01/api/logic/errors.js'

function retrieveAllDatabasePosts(callback) {
    validate.function(callback, 'callback')

    Post.find({})
        .then(userPosts => callback(null, userPosts))
        .catch(error => callback(new SystemError(error.message)))
}

export default retrieveAllDatabasePosts
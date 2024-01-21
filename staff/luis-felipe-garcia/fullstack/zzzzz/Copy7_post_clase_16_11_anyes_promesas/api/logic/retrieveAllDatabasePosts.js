import validate from './helpers/validate.js'
import { Post } from '../data/models.js'
import { SystemError } from './errors.js'

function retrieveAllDatabasePosts(callback) {
    validate.function(callback, 'callback')

    Post.find({})
        .then(userPosts => callback(null, userPosts))
        .catch(error => callback(new SystemError(error.message)))
}

export default retrieveAllDatabasePosts
//ESTA CON CALLBACKS/ID. PASAR A PROMISE/TOKEN...
import { validate, errors } from 'com'
import { Post } from '../data/models.js'
const { SystemError } = errors

function retrieveAllDatabasePosts(callback) {
    validate.function(callback, 'callback')

    Post.find({})
        .then(userPosts => callback(null, userPosts))
        .catch(error => callback(new SystemError(error.message)))
}

export default retrieveAllDatabasePosts
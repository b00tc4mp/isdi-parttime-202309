const { validateText, validateFunction, validateId } = require('./helpers/validators')
const {User, Post } = require('../data/models')
const { SystemError, NotFoundError} = require('./errors')

function createPost(userId, image, text, callback) {
    validateId(userId, 'user id')
    validateText(image, 'image')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    // TODO use models

    User.findById(userId).lean()
         .then(user =>{
            if(!user){
                callback(new NotFoundError('user not found'))
                return
            }
           Post.create({author: userId, image, text})
               .then(()=> callback(null))
               .catch(error => callback(new SystemError(error.message)))
         })
         .catch(error => callback(new SystemError(error.message)))
}

module.exports = createPost
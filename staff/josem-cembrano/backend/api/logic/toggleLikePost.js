const { NotFoundError, SystemError } = require('./errors')
const { validateText, validateFunction } = require('./helpers/validators')


const toggleLikePost = (userId, postId, callback) => {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')


}

module.exports = toggleLikePost
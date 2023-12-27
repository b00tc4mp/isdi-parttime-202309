const { validateFunction } = require('../utils/validators')
const JSON = require('../utils/JSON')

function retrieveFavPosts(callback) {
    validateFunction(callback, 'callback')


}

module.exports = retrieveFavPosts
const authenticateUser = require('./authenticateUser')
const changeEmailUser = require('./changeEmailUser')
const changePasswordUser = require('./changePasswordUser')
const createPost = require('./createPosts')
const deletePost = require('./deletePost')
const registerUser = require('./registerUser')
const retrieveFavs = require('./retrieveFavs')
const retrievePost = require('./retrievePost')
const retrieveUser = require('./retrieveUser')
const toggleFavPost = require('./toggleFavPost')
const toggleLikePost = require('./toggleLikePost')
const updatePostText = require('./updatePostText')

const logic = {
    authenticateUser,
    changeEmailUser,
    changePasswordUser,
    createPost,
    deletePost,
    registerUser,
    retrieveFavs,
    retrievePost,
    retrieveUser,
    toggleFavPost,
    toggleLikePost,
    updatePostText
}

module.exports = logic
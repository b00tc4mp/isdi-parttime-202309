const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const changeUserEmail = require('./changeUserEmail')
const changeUserPassword = require('./changeUserPassword')
const deleteUser = require('./deleteUser')

const createPost = require('./createPost')
const deletePost = require('./deletePost')
const retrieveFavPosts = require('./retrieveFavPosts')
const retrievePosts = require('./retrievePosts')
const toggleFavPost = require('./toggleFavPost')
const toggleLikePost = require('./toggleLikePost')
const updatePostText = require('./updatePostText')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    changeUserEmail,
    changeUserPassword,
    deleteUser,
    createPost,
    deletePost,
    retrieveFavPosts,
    retrievePosts,
    toggleFavPost,
    toggleLikePost,
    updatePostText
}

module.exports = logic
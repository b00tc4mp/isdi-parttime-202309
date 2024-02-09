// la forma de trabajar con require se llama commonJS (CJS), es la forma tradicional de node
// en cambio trabajar con export se llama ESM (ECMA script Modules)


const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const changeEmailUser = require('./changeEmailUser')
const changePasswordUser = require('./changePasswordUser')
const createPost = require('./createPost')
const retrieveFavPosts = require('./retrieveFavPosts')
const retrievePosts = require('./retrievePosts')
const toggleFavPost = require('./toggleFavPost')
const toogleLikePost = require('./toogleLikePost')
const editTextPost = require('./editTextPost')
const deletePost = require('./deletePost')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    changeEmailUser,
    changePasswordUser,
    createPost,
    retrieveFavPosts,
    retrievePosts,
    toggleFavPost,
    toogleLikePost,
    editTextPost,
    deletePost
}

module.exports = logic


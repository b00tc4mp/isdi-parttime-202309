const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const changeEmailUser = require('./changeEmailUser')
const changePasswordUser = require('./changePasswordUser')


const createPost = require('./createPost')
const retrieveFavPosts = require('./retrieveFavPosts')
const retrievePosts = require('./retrievePosts')
const toggleFavPost = require('./toggleFavPost')
const toggleLikePost = require('./toggleLikePost')
// 

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
	toggleLikePost,
	// updatePostText,
	// deletePost
}
module.exports = logic
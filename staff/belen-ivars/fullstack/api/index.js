require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const cors = require('./utils/cors')

const {
	registerUserHandler,
	authenticateUserHandler,
	retrieveUserHandler,
	createPostHandler,
	retrievePostsHandler,
	toggleLikePostHandler,
	toggleFavPostHandler,
	retrieveFavPostsHandler

} = require('./handlers')

mongoose.connect(process.env.MONGODB_URL)
	.then(() => {

		const server = express()

		server.get('/', (req, res) => res.send('Hello, World'))

		const jsonBodyParser = express.json()

		server.use(cors)

		server.post('/users', jsonBodyParser, registerUserHandler)

		server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

		server.get('/users', retrieveUserHandler)

		server.post('/posts', jsonBodyParser, createPostHandler)

		server.get('/posts', retrievePostsHandler)

		server.get('/posts/favs', retrieveFavPostsHandler)

		server.patch('/posts/:postId/likes', toggleLikePostHandler)

		server.patch('/posts/:postId/favs', toggleFavPostHandler)

		server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))
	})
	.catch(error => console.error(error))

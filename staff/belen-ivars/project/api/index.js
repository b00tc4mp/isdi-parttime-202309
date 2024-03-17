import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import {
	registerUserHandler,
	authenticateUserHandler,
	retrieveUserHandler

} from './handlers/index.js'

mongoose.connect(process.env.MONGODB_URL)

	.then(() => {
		const server = express()
		server.get('/', (req, res) => res.send('Hello world'))

		const jsonBodyParser = express.json()

		server.use(cors())

		server.post('/users', jsonBodyParser, registerUserHandler)

		server.post('/users/auth', jsonBodyParser, authenticateUserHandler)

		server.get('/users/:id', jsonBodyParser, retrieveUserHandler)

		server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))
	})

	.catch(error => console.error(error))
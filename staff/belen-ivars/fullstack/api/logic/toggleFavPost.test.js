import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import toggleFavPost from './toggleFavPost.js'

mongoose.connect(process.env.MONGODB_URL)
	.then(() => {
		try {
			toggleFavPost('65aed0bee005e644a95afb2a', '65aed0bee005e644a95afb2d')
				.then(() => {
					console.log('post fav toggled')
				})
				.catch(error => {
					console.error(error)
				})
		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))
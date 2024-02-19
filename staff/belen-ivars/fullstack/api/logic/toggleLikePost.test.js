import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import toggleLikePost from './toggleLikePost.js'

mongoose.connect(process.env.MONGODB_URL)
	.then(() => {
		try {
			toggleLikePost('65aed0bee005e644a95afb2a', '65b149008a34e2f43610cf7c')
				.then(() => {
					console.log('post like toggled')
				})
				.catch(() => {
					console.error(error)
				})
		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))
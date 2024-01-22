import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import toggleLikePost from './toggleLikePost.js'

mongoose.connect(process.env.MONGODB_URL)
	.then(() => {
		try {
			toggleLikePost('659b348c696ad77021d9e2f8', '659ac06c0e890e8a7a2ddaaa', error => {
				if (error) {
					console.error(error)

					return
				}

				console.log('post like toggled')
			})
		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))
import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import toggleFavPost from './toggleFavPost.js'

mongoose.connect(process.env.MONGODB_URL)
	.then(() => {
		try {
			toggleFavPost('659b348c696ad77021d9e2f8', '659ac06c0e890e8a7a2ddaaa', error => {
				if (error) {
					console.error(error)

					return
				}

				console.log('post fav toggled')
			})
		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))
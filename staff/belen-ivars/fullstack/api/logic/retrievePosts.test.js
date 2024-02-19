import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import retrievePosts from './retrievePosts.js'

mongoose.connect(process.env.MONGODB_URL)
	.then(() => {
		try {
			retrievePosts('65aed0bee005e644a95afb2a')
				.then(posts => {
					console.log('posts retrieved', posts)
				})
				.catch(error => {
					console.error(error)

				})
		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))
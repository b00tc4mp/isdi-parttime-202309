import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import retrieveFavPosts from './retrieveFavPosts.js'

mongoose.connect(process.env.MONGODB_URL)
	.then(() => {
		try {
			retrieveFavPosts('659abc140e890e8a7a2ddaa4', (error, posts) => {
				if (error) {
					console.error(error)

					return
				}
				console.log('fav posts retrieved', posts)
			})
		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))
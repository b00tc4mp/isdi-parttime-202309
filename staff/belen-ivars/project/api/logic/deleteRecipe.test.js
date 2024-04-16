import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import deleteRecipe from './deleteRecipe.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await deleteRecipe('65d656eaa92e85c9f9fa6d71', '65f97adbd699fa7945c5d178')

		console.log('recipe has been deleted')
	} catch (error) {
		console.log(error)
	}
})()
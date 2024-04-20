import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import toggleFavPost from './toggleFavRecipe.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await toggleFavPost('65f85ac7883fd3713c8bd3a3', '66215a11f876a54941ba4cb1')

		console.log('favs has been done')
	} catch (error) {
		console.log(error)
	}
})()
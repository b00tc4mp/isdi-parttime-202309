import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import retrieveRecipes from './retrieveRecipes.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await retrieveRecipes('65f85ac7883fd3713c8bd3a3')
		console.log('fav recipes retrieved')
	} catch (error) {
		console.log(error)
	}
})()
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import retrieveRecipes from './retrieveRecipes.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await retrieveRecipes('65d642e9695ce01b53585a85')
		console.log('recipes retrieved')
	} catch (error) {
		console.log(error)
	}
})()
import dotenv from 'dotenv'
dotenv.config()
import mongoose, { mongo } from 'mongoose'
import createIngredientsList from './getIngredientsList.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		const result = await createIngredientsList('65d655fac1dd88f9aee917d6', '6627c93094dfc90e1e112541')

		console.log(result, 'ingredients have been listed')
	} catch (error) {
		console.log(error)
	}
})()
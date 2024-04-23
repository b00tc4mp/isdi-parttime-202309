import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import findRecipes from './findRecipes.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		const recipe = await findRecipes('65f85ac7883fd3713c8bd3a3', ['huevo', 'plátano'])

		console.log(recipe)
	} catch (error) {
		console.log(error)
	}
})()
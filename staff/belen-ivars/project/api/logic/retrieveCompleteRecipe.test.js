import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import retrieveCompleteRecipe from './retrieveCompleteRecipe.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		const recipe = await retrieveCompleteRecipe('65d642e9695ce01b53585a85', '662a727018b3341e457b7f58')
		console.log(recipe, 'recipes retrieved')
	} catch (error) {
		console.log(error)
	}
})()
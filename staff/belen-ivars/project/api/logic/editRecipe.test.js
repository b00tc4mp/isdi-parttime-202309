import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import editRecipeDescription from './editRecipeDescription.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await editRecipeDescription('65d655fac1dd88f9aee917d6', '65f97adbd699fa7945c5d178', 'Persona con pintura corporal en las manos sucias')

		console.log('recipe has been edited')
	} catch (error) {
		console.log(error)
	}
})()
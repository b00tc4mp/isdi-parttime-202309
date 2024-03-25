import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import createRecipe from './createRecipe.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await createRecipe('65d655fac1dd88f9aee917d6', 'Colors', 'Persona con pintura corporal', 'https://www.pexels.com/es-es/foto/persona-con-pintura-corporal-1209843/')

		console.log('recipe has been published')
	} catch (error) {
		console.log(error)
	}
})()
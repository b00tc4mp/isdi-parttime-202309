import dotenv from 'dotenv'
dotenv.config()
import mongoose, { mongo } from 'mongoose'
import createRecipe from './createRecipe.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await createRecipe('65d655fac1dd88f9aee917d6', 'Aguacate relleno', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut neque ut ante mollis ultricies sed sit amet lacus. Nam dignissim urna vel porttitor placerat.', 'https://content.elmueble.com/medio/2023/03/31/aguacate-relleno-de-huevo-y-beicon_00000000_230821131859_1200x1798.jpg', ['aguacate', 'huevo', 'sal'], 'glutenfree', 'easy', 'grill')

		console.log('recipe has been created')
	} catch (error) {
		console.log(error)
	}
})()
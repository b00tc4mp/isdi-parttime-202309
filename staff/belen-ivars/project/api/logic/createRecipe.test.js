import dotenv from 'dotenv'
dotenv.config()
import mongoose, { mongo } from 'mongoose'
import createRecipe from './createRecipe.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await createRecipe('65d655fac1dd88f9aee917d6', 'Tortitas de plátano', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut neque ut ante mollis ultricies sed sit amet lacus. Nam dignissim urna vel porttitor placerat.', 'https://www.pequerecetas.com/wp-content/uploads/2015/04/tortitas-de-platano-sin-gluten.jpg', ['plátano', 'huevo'], 'glutenfree', 'easy', 'grill')

		console.log('recipe has been created')
	} catch (error) {
		console.log(error)
	}
})()
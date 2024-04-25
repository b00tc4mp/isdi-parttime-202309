import dotenv from 'dotenv'
dotenv.config()
import mongoose, { mongo } from 'mongoose'
import checkIngredient from './checkIngredient.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await checkIngredient('65d655fac1dd88f9aee917d6', 'salmó')

	} catch (error) {
		console.log(error)
	}
})()
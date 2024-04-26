import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import editRecipe from './editRecipe.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		const result = await editRecipe('65f85ac7883fd3713c8bd3a3', '6627835270b7a4be544fe65d', 'Albergínies farcides', 'Tallar les albergínies per la meitat i fer talls amb un ganivet en forma de quadrícula. Posar 10 minuts al microones a tota potència. Posar la tonyina escampada per damunt de les albergínies, i després cobrir-ho tot amb formatge. Posar 10 minuts més al microones.', 'https://cdn.recetasderechupete.com/wp-content/uploads/2021/08/Berenjenas-rellenas-de-atun.jpg', 'albergínia', 'glutenfree', 'easy', 'microwave')

		console.log(result, 'recipe has been edited')
	} catch (error) {
		console.log(error)
	}
})()
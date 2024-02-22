import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import authenticateUser from './authenticateUser.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await authenticateUser('napi@col.com', '123123123')
		console.log('user authenticated')
	} catch (error) {
		console.log(error)
	}
})()
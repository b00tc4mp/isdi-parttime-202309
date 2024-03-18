import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import retrieveUser from './retrieveUser.js'

(async () => {
	await mongoose.connect(process.env.MONGODB_URL)
	try {
		await retrieveUser('65d642e9695ce01b53585a85')
		console.log('user retrieved')
	} catch (error) {
		console.log(error)
	}
})()
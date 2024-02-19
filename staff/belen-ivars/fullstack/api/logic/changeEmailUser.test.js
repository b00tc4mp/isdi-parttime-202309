import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import changeEmailUser from './changeEmailUser.js'

mongoose.connect(process.env.TEST_MONGODB_URL)
	.then(() => {
		try {
			changeEmailUser('65aed0bee005e644a95afb2a', 'peter2@pan.com', 'peter@pan.com', 'peter@pan.com', '123123123')
				.then(() => console.log('email changed'))
				.catch(error => console.log(error))
		} catch (error) {
			console.log(error)
		}
	})
	.catch(error => console.error(error))
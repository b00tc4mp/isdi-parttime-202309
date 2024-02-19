import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import changePasswordUser from './changePasswordUser.js'

mongoose.connect(process.env.TEST_MONGODB_URL)
	.then(() => {
		try {
			changePasswordUser('65b58b1c0c33c02409e71f1f', 'password-0.800467269610214', 'password-0.800467269610217', 'password-0.800467269610217')
				.then(() => console.log('password changed'))
				.catch(error => console.log(error))
		} catch (error) {
			console.log(error)
		}
	})
	.catch(error => console.error(error))
import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import deletePost from './deletePost.js'
import { User } from '../data/models.js'

mongoose.connect(process.env.MONGODB_URL)
	// .then(() => User.deleteMany())
	// .then(() => User.create({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' }))
	.then(user => {
		try {
			//deletePost(user.id, 'http://www.lafaneca.net/images/virtuemart/product/resized/calabacines-451x300_0x200.jpg', 'hello!')
			deletePost('65aed0bee005e644a95afb2a', '65b14d1f8a34e2f43610cf91')
				.then(() => console.log('deleted'))
				.catch(error => console.error(error))


		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))
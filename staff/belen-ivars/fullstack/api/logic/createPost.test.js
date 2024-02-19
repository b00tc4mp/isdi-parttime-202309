import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect(process.env.MONGODB_URL)
	// .then(() => User.deleteMany())
	// .then(() => User.create({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' }))
	.then(user => {
		try {
			//createPost(user.id, 'http://www.lafaneca.net/images/virtuemart/product/resized/calabacines-451x300_0x200.jpg', 'hello!')
			createPost('65aed0bee005e644a95afb2a', 'http://www.lafaneca.net/images/virtuemart/product/resized/calabacines-451x300_0x200.jpg', 'hello')
				.then(() => console.log('created'))
				.catch(error => console.error(error))


		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))
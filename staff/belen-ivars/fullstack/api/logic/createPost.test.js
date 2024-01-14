const mongoose = require('mongoose')

const createPost = require('./createPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
	.then(() => {

		try {
			createPost('659b348c696ad77021d9e2f8', 'http://www.lafaneca.net/images/virtuemart/product/resized/calabacines-451x300_0x200.jpg', 'hello!', error => {

				if (error) {
					console.error(error)

					return
				}
				console.log('new post created')
			})
		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))
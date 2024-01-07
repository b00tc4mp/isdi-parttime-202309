const createPost = require('./createPost')

try {
	createPost('206s36wbyvpc', 'http://www.lafaneca.net/images/virtuemart/product/resized/calabacines-451x300_0x200.jpg', 'hello!', error => {

		if (error) {
			console.error(error)

			return
		}
		console.log('new post created')
	})
} catch (error) {
	console.log(error)
}
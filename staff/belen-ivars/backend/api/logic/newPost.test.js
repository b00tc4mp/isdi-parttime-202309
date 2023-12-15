const newPost = require('./newPost')

try {
	newPost('206s36wbyvpc', 'Cala Bacín', 'http://www.lafaneca.net/images/virtuemart/product/resized/calabacines-451x300_0x200.jpg', 'hello!', error => {

		if (error) {
			console.error(error)

			return
		}
		console.log('new post update')
	})
} catch (error) {
	console.log(error)
}
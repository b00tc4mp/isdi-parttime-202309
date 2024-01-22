import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect(process.env.TEST_MONGODB_URL)
	.then(() => {
		try {
			registerUser('Coca Dacsa', 'coca@dacsa.com', '123123123')
				.then(() => console.log('user registered'))
				.catch(error => console.error(error))

		} catch (error) {
			console.log(error)
		}
	})
	.catch(error => console.error(error))

import mongoose from 'mongoose'
import { User, Post } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
	.then(() => {
		/* const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' })

		pepito.save()
			.then(() => console.log('user created'))
			.catch(error => console.error(error)) */

		/* const post = new Post({ author: '659ab9e20e890e8a7a2ddaa3', image: 'https://muhimu.es/wp-content/uploads/2015/02/Wendy-Darling-peter-pan-sindrome.jpg', text: 'Flying free' })

		post.save()
			.then(() => console.log('post created'))
			.catch(error => console.error(error)) */

		/* 	Post.findById('659abe6d0e890e8a7a2ddaa8')
				.then(post => {
					post.likes.push('659ae94ae670a9922ac41776')
	
					post.save()
						.then(() => console.log('post liked'))
						.catch(error => console.error(error))
				})
				.catch(error => console.error(error)) */

		User.findById('659abc660e890e8a7a2ddaa5')
			.then(user => {
				user.favs.push('659abe6d0e890e8a7a2ddaa8')

				user.save()
					.then(() => console.log('post favorited'))
					.catch(error => console.error(error))
			})
			.catch(error => console.error(error))
	})
	.catch(error => console.error(error))
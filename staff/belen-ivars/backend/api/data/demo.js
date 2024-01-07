const mongodb = require('mongodb')

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
	.then(connector => {
		const db = connector.db('test')

		const users = db.collection('users')
		const posts = db.collection('posts')

		/* users.insertOne({ name: 'Fari Netes', email: 'fari@netes.com', password: '123123123', favs: [] })
			.then(result => console.log('inserted', result))
			.catch(error => console.error(error)) */

		/* users.updateOne({ _id: new ObjectId('659ae94ae670a9922ac41776') }, { $set: { name: 'Alber Coc', email: 'alber@coc.com' } })
			.then(result => console.log('updated', result))
			.catch(error => console.error(error)) */

		/* users.findOne({ _id: new ObjectId('659ae94ae670a9922ac41776') })
			.then(result => console.log('found', result))
			.catch(error => console.error(error)) */

		/* users.deleteOne({ _id: new ObjectId('659aea0e17e58ab91d5e040a') })
			.then(result => console.log('deleted', result))
			.catch(error => console.error(error)) */

		/* users.find().toArray()
			.then(result => console.log('found all', result))
			.catch(error => console.error(error)) */

		/* posts.insertOne({ author: new ObjectId('659abc140e890e8a7a2ddaa4'), image: 'https://filasiete.com/wp-content/uploads/2020/05/peterpan.jpg', text: 'Hello, Campa!', likes: [] })
			.then(result => console.log('post published', result))
			.catch(error => console.error(error)) */

		posts.find({ author: new ObjectId('659abc140e890e8a7a2ddaa4') }).toArray()
			.then(result => console.log('posts by author', result))
			.catch(error => console.error(error))

	})
	.catch(error => console.error(error))
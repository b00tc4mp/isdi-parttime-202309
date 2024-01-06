const mongodb = require('mongodb')

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017') //Instanciamos un cliente, una constructora

client.connect()
    .then(connector => {
        const db = connector.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // users.insertOne({ name: 'Ele Fante', email: 'ele@fante.com', password: '123123123', favs: [] })
        //     .then(result => console.log('inserted', result))
        //     .catch(error => console.error(error))

        // users.updateOne({ _id: new ObjectId('65930022e2ad904142b3eafe') }, { $set: { name: 'Gi Rafa', email: 'gi@rafa.com' } })
        //     .then(result => console.log('updated', result))
        //     .catch(error => console.error(error))

        // users.findOne({ _id: new ObjectId('658c7b247ec2115fae5832f6') })
        //     .then(result => console.log('found', result))
        //     .catch(error => console.error(error))

        // users.deleteOne({ _id: new ObjectId('65930022e2ad904142b3eafe') })
        //     .then(result => console.log('deleted', result))
        //     .catch(error => console.error(error))

        // users.find().toArray()
        //     .then(result => console.log('found all', result))
        //     .catch(error => console.error(error))

        // posts.insertOne({ author: new ObjectId('658c7b247ec2115fae5832f6'), image: 'http://image.com/peter', text: 'Hello Peter!', likes: [] })
        //     .then(result => console.log('inserted', result))
        //     .catch(error => console.error(error))

        posts.find({ author: new ObjectId('658c7b247ec2115fae5832f6') }).toArray()
            .then(result => console.log('found posts', result))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
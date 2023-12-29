const mongodb = require('mongodb')

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then((connector) => {

        const db = connector.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // users.insertOne({ name: 'Ele fante', email: 'ele@fante.com', password: '123123123', favs: [] })
        //     .then(result => console.log('inserted', result))
        //     .catch(error => console.error(error))

        // users.updateOne({ _id: new ObjectId('6587d1da208b088c444f2cc0') }, { $set: { name: 'Gi rafa', email: 'gi@rafa.com' } })
        //     .then(result=> console.log('updated', result))
        //     .catch(error => console.error(error))

        // users.findOne({ _id: new ObjectId('6586d3d458f281a607a497fd') })
        //     .then(result => console.log('found', result))
        //     .catch(error => console.error(error))

        // users.deleteOne({ _id: new ObjectId('6586d3d458f281a607a497fd') })
        //     .then(result => console.log('deleted', result))
        //     .catch(error => console.error(error))

        // users.find().toArray()
        //     .then(result => console.log('found all', result))
        //     .catch(error => console.error(error))ç

        // users.insertOne({ author: new ObjectId('6586d53b58f281a607a497fe'), image: 'http:image.com/patatafrita', text: 'Hello, potatoe', likes: [] })
        //     .then(result => console.log('inserted', result))
        //     .catch(error => console.error(error))

        users.find({ author: new ObjectId('6586d53b58f281a607a497fe') }).toArray()
            .then(result => console.log('found post', result))
            .catch(error => console.error(error))



    })
    .catch(error => console.error(error))
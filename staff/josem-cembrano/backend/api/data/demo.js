const mongodb = require('mongodb')

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connector => {
        const db = connector.db('test')

        const users = db.collection('users')

        // users.insertOne({ name: 'Lin Ce', email: 'lin@ce.com', password: '123123123', favs: [] })
        //     .then((result) => console.log('inserted', result))
        //     .catch(error => console.error(error))

        // users.updateOne({ _id: new ObjectId('659e8d0e34b63f03f98e1fe9') }, { $set: { name: 'Coco Drilo', email: 'coco@drilo.com' } })
        // .then((result) => console.log('update', result))
        // .catch(error => console.error(error))

        // users.findOne({ _id: new ObjectId('659e8d0e34b63f03f98e1fe9') })
        //     .then((result) => console.log('found', result))
        //     .catch(error => console.error(error))

        // users.deleteOne({ _id: new ObjectId('659e8d0e34b63f03f98e1fe9') })
        //     .then((result) => console.log('deleted', result))
        //     .catch((error) => console.error(error))

        // users.find().toArray()
        //     .then((result) => console.log('found all', result))
        //     .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
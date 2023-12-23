const mongodb = require('mongodb')
const { MongoClient, ObjectId } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connector => {
        console.log('conected')
        const db = connector.db('test')
        const users = db.collection('users')
        const posts = db.collection('posts')

        // Step 1
        // users.insertOne({name: 'Ji Rafa', email: 'ji@rafa.com', password: '1', favs: []})
        // .then(console.log('user created'))
        // .catch(error => console.error(error))

        //Step 2
        // users.insertOne({ name: 'Ele Fante', email: 'ele@fante.com', password: '1', favs: [] })
        //     .then(console.log('user created'))
        //     .catch(error => console.error(error))

        //Step 3
        // users.updateOne({ _id: new ObjectId('65847354048098ba1c111778')}, { $set: { name: 'Plati Pus', email: 'plati@pus.com', password: '1', favs: [] } })
        //     .then(console.log('user changed'))
        //     .catch(error => console.error(error))

        // //Step 4
        // users.findOne({ _id: new ObjectId('658467e375fc0b52c39022e3') })
        //     .then((result => console.log('found', result)))
        //     .catch(error => console.error(error))

        //Step 5
        // users.insertOne({ name: 'Ji Rafa', email: 'ji@rafa.com', password: '1', favs: [] })
        //     .then(console.log('user created'))
        //     .catch(error => console.error(error))
        // users.deleteOne({ name: 'Ji Rafa' })
        //     .then((result => console.log('deleted', result)))
        //     .catch(error => console.error(error))

        //Step 6
        // users.find().toArray()
        //     .then((result => console.log('found all', result)))
        //     .catch(error => console.error(error))

        // Step 7
        // posts.insertOne({ author: new ObjectId('65847354048098ba1c111778'), image: 'https://media.istockphoto.com/id/658344164/id/foto/platipus-australia.jpg?s=612x612&w=0&k=20&c=SCk1HIojGGzR9R5xWK3hI2Iq9OBzZ-5HAq5Z9u8jP5M=', text: 'I am an aussie platipus', likes: [] })
        //     .then(result => console.log('created', result))
        //     .catch(error => console.error(error))

        //Step 8
        posts.find({ author: '6584656975fc0b52c39022e1' }).toArray()
            .then(result => console.log('found', result))
            .catch(error => console.error(error))


    })

    .catch(error => console.error(error))
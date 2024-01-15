const mongodb = require('mongodb')

const {MongoClient, ObjectId} = mongodb 

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connector =>{
        const db= connector.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // users.insertOne({name:'Wendy Darling', email:'wendy@darling.com', password:'123123123', favs:[]})
        //     .then(result=> console.log('inserted', result))
        //     .catch(error=> console.error(error))

        // users.updateOne({_id: new ObjectId('659d8dc57fec30cfdd9bb5f3')}, {$set:{name:'Gi Rafa', email:'gi@rafa.com'}})
        //     .then(result=> console.log('inserted', result))
        //     .catch(error=> console.error(error))

        // users.findOne({_id: new ObjectId('659c2013f51d532c3db2f2ca')})
        //     .then(result=> console.log('found', result))
        //     .catch(error=> console.error(error))

        // users.deleteOne({_id: new ObjectId('659d8dc57fec30cfdd9bb5f3')})
        //     .then(result=> console.log('deleted', result))
        //     .catch(error=> console.error(error))

        // users.find().toArray()
        //     .then(result=> console.log('found all', result))
        //     .catch(error=> console.error(error))

        // posts.insertOne({author: new ObjectId('659c2013f51d532c3db2f2ca'), image:'http://image.com/peter', text:'hello, peter!'})
        //     .then(result=> console.log('inserted', result))
        //     .catch(error=> console.error(error))

        posts.find({author: new ObjectId('659c2013f51d532c3db2f2ca')}).toArray()
                .then(result=> console.log('found posts', result))
                .catch(error=> console.error(error))
    })
    .catch(error=> console.error(error))
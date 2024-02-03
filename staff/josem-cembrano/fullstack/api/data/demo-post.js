import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connector => {
        const db = connector.db('test')

        const posts = db.collection('posts')

        // posts.insertOne({ author: 'Ele Fante', image: 'https://www.laprensa.hn/binrepository/530x400/0c0/0d0/none/11004/DWLW/20100322_661824_1_LP503349_MG82423844.jpg', text: 'Im soaking', likes: [] })
        //     .then((result) => console.log('inserted', result))
        //     .catch(error => console.error(error))

        posts.find({ author: new ObjectId('658c2c8d58f7ef06dd68ba83') }).toArray()
            .then((result) => console.log('found posts', result))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
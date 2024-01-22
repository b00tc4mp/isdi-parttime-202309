const mongodb = require('mongodb')

// Para conectarnos a la bbdd, nos traemos la clase MongoClient, y lo instanciamos. MongoClient es una clase que está dentro del objeto mongodb. Aquí estamos destructurando. MongoClient nos sirve para crear un cliente como Mongosh. Es decir nos vamos a conectar desde aquí con node, en vez de através de mongosh en la terminal.
// Para hacer un updateOne, necesitamos el ObjectId. Como es una función de Mongo, nos la traemos aquí:
const { MongoClient, ObjectId } = mongodb

// le pasamos la ruta de la conexión: 1) usamos el protocolo de mongo (en vez de http)). 2)la dirección de nuestra máquina. Localhost no funciona siempre desde VSC, así que mejor poner la dirección ip: 127.0.0.1, y 3)El puerto en que suele abrirse Mongo es: 27017
const client = new MongoClient('mongodb://127.0.0.1:27017')

// nos conectamos así con client.connect y un try catch. Si nos conectamos succesffuly, en el callback del then recibimos el connector, con el que podemos decir que usemos el test y luego la colección users
client
  .connect()
  .then((connector) => {
    const db = connector.db('test')

    const users = db.collection('users')
    const posts = db.collection('posts')

    // users
    //   .insertOne({
    //     name: 'Pata Tus',
    //     email: 'pata@tus.com',
    //     password: 'aaa',
    //     favs: [],
    //   })
    //   .then(result => console.log('inserted', result))
    //   .catch((error) => console.error(error))

    // users
    //   .updateOne(
    //     { _id: new ObjectId('65acf7e1f0bad8bad5bcdd9e') },
    //     { $set: { name: 'Pata Tin', email: 'pata@tin.com' } }
    //   )
    //   .then(result => console.log('updated', result))
    //   .catch((error) => console.error(error))

    // users
    //   .findOne({ _id: new ObjectId('65acf7e1f0bad8bad5bcdd9e') })
    //   .then((result) => console.log('found', result))
    //   .catch((error) => console.error(error))

    // users
    //   .deleteOne({ _id: new ObjectId('659be6460093e6bdc0b0ad0e') })
    //   .then((result) => console.log('deleted', result))
    //   .catch((error) => console.error(error))

    // users
    //   .find().toArray()
    //   .then((result) => console.log('found all', result))
    //   .catch((error) => console.error(error))

    // posts
    //   .insertOne({
    //     author: new ObjectId('65acf7e1f0bad8bad5bcdd9e'),
    //     image:
    //       'https://valenciafruits.com/wp-content/uploads/2023/10/Calabacin-01-1024x820.jpg',
    //     text: 'Time to grow!',
    //     likes: [],
    //   })
    //   .then((result) => console.log('inserted', result))
    //   .catch((error) => console.error(error))

    // posts
    //   .find({ author: new ObjectId('65acf7e1f0bad8bad5bcdd9e') })
    //   .toArray()
    //   .then((result) => console.log('found posts', result))
    //   .catch((error) => console.error(error))
  })
  .catch((error) => console.error(error))

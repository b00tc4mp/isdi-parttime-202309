const mongodb = require('mongodb')

//ahora me tengo que conectar a la base de datos

//MongoClient es una clase que esta dentro de mongodb (es como un gran objeto)
// mongoClient sirve para crear un cliente

const { MongoClient, ObjectId } = mongodb

//nos montamos una mongo shell dentro de node
const client = new MongoClient('mongodb://127.0.0.1:27017') //le pasamos la ruta de la conexión, que es mi dirección ip
// y cogemos el puerto 27017 que es dondde esta mongo

//ahora noss conectamos al servidor
client.connect()
    .then(connector => {
        const db = connector.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

        ///// INSERTAR UN USUARIO EN LA BASE DE DATOS ///

        // users.insertOne({ name: 'Piru Leta', email: 'piru@leta.com', password: '123', favs: [] })
        //     .then(result => console.log('inserted', result))
        //     .catch(error => console.error(error))


        ///// ACTUALIZAR UN USUARIO DE LA BASE DE DATOS ///

        // users.updateOne({ _id: new ObjectId('658739a20aecab8d91db3e0d') }, { $set: { email: 'pirupiru@leta.com' } })
        //     .then(result => console.log('updated', result))
        //     .catch(error => console.error(error))


        ///// BUSCAR UN USUARIO DE LA BASE DE DATOS ///


        // users.findOne({ _id: new ObjectId('658739a20aecab8d91db3e0d') })
        //     .then(result => console.log('found', result))
        //     .catch(error => console.error(error))


        ///// ELIMINAR UN USUARIO DE LA BASE DE DATOS ///

        // users.deleteOne({ _id: new ObjectId('658739a20aecab8d91db3e0d') })
        //     .then(result => console.log('deleted', result))
        //     .catch(error => console.error(error))


        ///// BUSCAR MUCHOS USUARIOS DE LA BASE DE DATOS ///

        // users.find().toArray()
        //     .then(result => console.log('found all', result))
        //     .catch(error => console.error(error))


        ///// INSERTAR UN POST EN LA BASE DE DATOS ///

        // posts.insertOne({ author: new ObjectId('658739a20aecab8d91db3e0d'), image: 'https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-piruleta-cara-sobre-fondo-azul_782990-13.jpg', text: 'sweety', likes: [] })
        //     .then(result => console.log('inserted', result))
        //     .catch(error => console.error(error))


        ///// BUSCAR LOS POSTS DE UN USUARIO, POR EJEMPLO, PETER ///

        posts.find({ author: new ObjectId('65846d97aef8dec090ae81de') }).toArray()
            .then(result => console.log('found posts', result))
            .catch(error => console.error(error))

    })
    .catch(error => console.error(error)) 
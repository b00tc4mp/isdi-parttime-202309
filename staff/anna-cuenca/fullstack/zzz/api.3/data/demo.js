const mongoose = require('mongoose')

const { Schema, model, ObjectId } = mongoose

// definimos el esquema de usuario
const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true //crea un indice para que no deje registrar a más usuarios con el mismo email 
    },
    password: {
        type: String,
        required: true,
        minlenght: 8
    },
    favs: [{
        type: ObjectId,
        ref: 'Post'
    }]
})

const post = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User' //le decimos que el objectIdd hace referencia a usuario
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: 'User'
    }]
})

//tenemos que usar una clase para construir usuarios
const User = model('User', user)
const Post = model('Post', post)

mongoose.connect('mongodb://127.0.0.1:27017/test') //me conecto a mongo
    .then(() => {

        /// CREATE USER
        // const pepito = new User({ name: 'Patata Frita', email: 'patata@frita.com', password: '123' })
        // pepito.save()
        //     .then(() => console.log('saved'))
        //     .catch(error => console.error(error))

        // //CREATE POST

        // const post = new Post({ author: '6589cf2c92335330a7f8c762', image: 'https://i.pinimg.com/originals/28/6a/27/286a2752a4c5c2988397e291dcb2d1a8.jpg', text: 'Hi' })
        // post.save()
        //     .then(() => console.log('post saved'))
        //     .catch(error => console.error(error))

        //     })
        //     .catch(error => console.error(error))

        // FAV POST
        User.findById('658b0ef5483938daf11c9c4d') //id del usuario pepito grillo
            .then(user => {
                user.favs.push('658b0c0f86f8eb9c37d85e7c')
                user.save()
                    .then(() => console.log('fav saved'))
                    .catch(error => console.error(error))
            })

    })
    .catch(error => console.error(error))

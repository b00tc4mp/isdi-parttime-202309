const mongoose = require('mongoose')

const { Schema, model, ObjectId } = mongoose

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
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
        ref: 'User'
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



const User = model('User', user)
const Post = model('Post', post)

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        // const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' })

        // pepito.save()
        //     .then(() => console.log('user created'))
        //     .catch(error => console.error(error))

        // const post = new Post({ author: '65894a4bb1c3798750d0ba09', image: 'https://pepito.com/image', text: 'Hola, Pepito!' })

        // post.save()
        //     .then(() => console.log('post created'))
        //     .catch(error => console.error(error))

        // Post.findById('65894cf114da3fc1cd6fe1e8')
        //     .then(post => {
        //         post.likes.push('65894cf114da3fc1cd6fe1e8')

        //         post.save()
        //             .then(() => console.log('post liked'))
        //             .catch(error => console.error(error))
        //     })
        //     .catch(error => console.error(error))

        User.findById('658951d12826b61970e8d9e2')
            .then(user => {
                user.favs.push('658951d12826b61970e8d9e3')

                user.save()
                    .then(() => console.log('post favorited'))
                    .catch(error => console.error(error))
            })
            .catch(error => console.error(error))

    })
    .catch(error => console.error(error))






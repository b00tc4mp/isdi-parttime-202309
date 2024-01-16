const mongoose = require('mongoose')

const { Schema, model, ObjectId } = mongoose

const user = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
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
        require: true,
        ref: 'User'
    },
    image: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
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
        //     .then(() => console.log('saved'))
        //     .catch(error => console.error(error))

        // const post = new Post({ author: '658c7b247ec2115fae5832f6', image: 'https://pepito.com/image', text: 'Hola, Pepito!' })

        // post.save()
        //     .then(() => console.log('post saved'))
        //     .catch(error => console.error(error))

        // Post.findById('6595b2e3268a63f15dfc6cc5')
        //     .then(post => {
        //         post.likes.push('6595b2e3268a63f15dfc6cc5')

        //         post.save()
        //             .then(() => console.log('post liked'))
        //             .catch(error => console.error(error))
        //     })

        User.findById('658c7b247ec2115fae5832f6')
            .then(user => {
                user.favs.push('6595b2e3268a63f15dfc6cc5')

                user.save()
                    .then(() => console.log('post favorite'))
                    .catch(error => console.error(error))
            })
    })
    .catch(error => console.error(error))
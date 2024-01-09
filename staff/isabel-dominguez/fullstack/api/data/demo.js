const mongoose = require('mongoose')
const { User, Post } = require('./models')

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
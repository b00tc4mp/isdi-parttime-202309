const mongoose = require('mongoose')
const { User, Post } = require('./models')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        // Step 1: create a user
        // const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '1' })
        // pepito.save()
        //     .then(() => console.log('user saved'))
        //     .catch(error => console.error(error))

        // Step 2: create a post
        // const post = new Post({
        //     author: '65847354048098ba1c111778',
        //     image: 'https://media.istockphoto.com/id/658344164/id/foto/platipus-australia.jpg?s=612x612&w=0&k=20&c=SCk1HIojGGzR9R5xWK3hI2Iq9OBzZ-5HAq5Z9u8jP5M=',
        //     text: 'I am an aussie platipus'
        // })
        // post.save()
        //     .then(() => console.log('post saved'))
        //     .catch(error => console.error(error))

        //Step 3: like a post
        // Post.findById('65847adb875dad65bcbc74d5')
        //     .then(post => {
        //         post.likes.push('65847354048098ba1c111778')
        //         post.save()
        //             .then(() => console.log('post liked'))
        //             .catch(error => console.error(error))

        //     })

        //Step 4: add a post to fav list
        User.findById('65847354048098ba1c111778')
            .then(user => {
                user.favs.push('65847adb875dad65bcbc74d5')
                user.save()
                    .then(() => console.log('post favourited'))
                    .catch(error => console.error(error))

            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))

import mongoose from 'mongoose'

import { User, Post } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        const pepito = new User({ name: 'Coli Flor', email: 'coli@flor.com', password: '123123123' })

        pepito.save()
            .then(() => console.log('user saved'))
            .catch(error => console.error(error))

        // const post = new Post({ author: '65a3e024e5d1ca0e61f4d85e', image: 'https://cafeteraymanta.files.wordpress.com/2015/03/pgrillo.jpg', text: 'Hello guys!!' })
        // post.save()
        //     .then(() => console.log('post saved'))
        //     .catch(error => console.error(error))

        // Post.findById('65a664df5aa10970b5e925d9')
        //     .then(post => {
        //         post.likes.push('65a664df5aa10970b5e925d9')

        //         post.save()
        //             .then(() => console.log('post liked'))
        //             .catch((error) => console.error(error))
        //     })
        //     .catch(error => console.error(error))

        // User.findById('65a66bb4be752c047144bfee')
        //     .then(user => {
        //         user.favs.push('65a66bb4be752c047144bfef')

        //         user.save()
        //             .then(() => console.log('user favorited'))
        //             .catch((error) => console.error(error))
        //     })
        //     .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
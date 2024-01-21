import mongoose from 'mongoose'
import retrieveFavPosts from './retrieveFavPosts.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveFavPosts('658d4d9888f3cf1b1fb4d3ab', (error, posts) => {
                if (error) {
                    console.error(error)

                    return
                }
                console.log('retrieved posts', posts)
            })
        } catch (error) {
            console.log(error)

        }
    })




import mongoose from 'mongoose'
import retrieveFavPosts from './retrieveFavPosts.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveFavPosts('65ad5eab7930b43d626fd0f8', (error, posts) => {
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




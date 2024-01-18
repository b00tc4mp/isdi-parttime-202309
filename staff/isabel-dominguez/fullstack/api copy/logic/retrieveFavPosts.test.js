import mongoose from 'mongoose'
import retrieveFavPosts from './retrieveFavPosts.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveFavPosts('659d80f8aab595d1bf1d8ece', (error, favPosts) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('retrieved', favPosts)
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
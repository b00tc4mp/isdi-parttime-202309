import mongoose from 'mongoose'

import retrieveFavPosts from './retrieveFavPosts.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveFavPosts('65a6c658f50cc319ad9a0b01', (error, posts) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('retrieved posts', posts)
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
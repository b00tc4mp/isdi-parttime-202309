import mongoose from 'mongoose'

import retrieveFavPost from './retrieveFavPosts.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveFavPost('65a7bd5bac10d94819cc652e', (error, posts) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('retrieved fav posts', posts)
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
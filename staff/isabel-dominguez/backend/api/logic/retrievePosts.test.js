const mongoose = require('mongoose')
const retrievePosts = require('./retrievePosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrievePosts((error, posts) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('retrieved', posts)
            })

        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
const mongoose = require('mongoose')
const retrievePosts = require('./retrievePosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrievePosts('658d4dd388f3cf1b1fb4d3af', (error, posts) => {
                if (error) {
                    console.error(error)

                    return
                }
                console.log('user posts', posts)
            })
        } catch (error) {
            console.log(error)

        }
    })
    .catch(error => console.error(error))




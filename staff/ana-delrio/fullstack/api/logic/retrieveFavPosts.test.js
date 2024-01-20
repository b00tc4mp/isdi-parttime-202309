const mongoose = require('mongoose')
const retrieveFavPosts = require('./retrieveFavPosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveFavPosts('658d4dd388f3cf1b1fb4d3af', (error, posts) => {
                if (error) {
                    console.error(error)

                    return
                }
                console.log('user fav posts', posts)
            })
        } catch (error) {
            console.log(error)

        }
    })




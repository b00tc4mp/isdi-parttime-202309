const mongoose = require('mongoose')
const retrievePosts = require('./retrievePosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {

            retrievePosts('6584656975fc0b52c39022e1', (error, posts) => {

                if (error) {
                    console.error(error)
                    return
                }

                console.log('user posts', posts)

            })

        } catch (error) {
            console.error(error)

        }
    })
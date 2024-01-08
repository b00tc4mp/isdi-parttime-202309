const mongoose = require('mongoose')

const retrievePosts = require('./retrievePosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {
            retrievePosts('659b00eb4e62f914182bb69a', (error, posts) => {
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
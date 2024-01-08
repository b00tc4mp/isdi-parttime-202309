const mongoose = require('mongoose')

const retrievePosts = require('./retrievePosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrievePosts('65849effd6fe566e658c5580', (error, posts) => {
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
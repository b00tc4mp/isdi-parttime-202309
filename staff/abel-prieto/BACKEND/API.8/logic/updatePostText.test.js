const mongoose = require('mongoose')
const updatePostText = require('./updatePostText')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updatePostText('65942e03e5a6dab915783e58', '65942e77657640a65767094d', 'Im Batman!!', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('text post updated!')
            })
        } catch (error) {
            console.error(error.message)
        }
    })
    .catch(error => console.log(error))
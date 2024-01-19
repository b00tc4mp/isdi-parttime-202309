const mongoose = require('mongoose')

const toggleLikePost = require('./toggleLikePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost('65a7bd5bac10d94819cc652e', '65a66bb4be752c047144bfef', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('like toggled👍')

            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))

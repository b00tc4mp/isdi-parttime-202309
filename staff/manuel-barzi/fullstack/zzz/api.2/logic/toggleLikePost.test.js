const mongoose = require('mongoose')

const toggleLikePost = require('./toggleLikePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {
            toggleLikePost('65849effd6fe566e658c5580', '659c4a0d735c5e851dad76cd', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('post like toggled')
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
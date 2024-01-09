const mongoose = require('mongoose')
const toggleLikePost = require('./toggleLikePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost('65996aa2effb039830404b09', '659ab25810af0c2ef119051b', error => {
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
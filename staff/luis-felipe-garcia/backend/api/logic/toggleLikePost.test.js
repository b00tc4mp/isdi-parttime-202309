const mongoose = require('mongoose')
const toggleLikePost = require('./toggleLikePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost("6584656975fc0b52c39022e1", "658522cd96367f332bc1518b", error => {
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
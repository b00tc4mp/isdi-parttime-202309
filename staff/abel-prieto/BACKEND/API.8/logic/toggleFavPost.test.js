const mongoose = require('mongoose')
const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleFavPost('65942e77657640a65767094d', '6595b6f5a456f32af3f9b029', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('toggle fav succesfully!')
            })
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))

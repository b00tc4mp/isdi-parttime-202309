const mongoose = require('mongoose')
const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleFavPost('659d5f969e4dd0113d9a4f44', '659c1bd1492d8b445a0884b7', error => {
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

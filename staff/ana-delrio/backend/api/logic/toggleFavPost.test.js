
const mongoose = require('mongoose')
const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleFavPost('658d4dd388f3cf1b1fb4d3af', '658ea242aadfc657d89b7a30', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('post fav toggled')
            })
        } catch (error) {
            console.error(error)
        }

    })

    .catch(error => console.error(error))

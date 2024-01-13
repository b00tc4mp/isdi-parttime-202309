
const mongoose = require('mongoose')
const updatePostText = require('./updatePostText')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updatePostText('658d4dd388f3cf1b1fb4d3af', '658ea242aadfc657d89b7a30', 'TEXTO CAMBIADO!', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('text updated')
            })
        } catch (error) {
            console.error(error)
        }

    })

    .catch(error => console.error(error))

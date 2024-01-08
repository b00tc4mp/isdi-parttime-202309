

const mongoose = require('mongoose')
const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {

        try {
            toggleFavPost('658b0c0f86f8eb9c37d85e7c', '658b1787d6c3f0f29677ccc6', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('fav toogled')
            })
        } catch (error) {
            console.error(error)
        }
    })

    .catch(error => console.error(error))


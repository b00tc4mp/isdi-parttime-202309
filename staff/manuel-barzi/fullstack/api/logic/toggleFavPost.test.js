const mongoose = require('mongoose')

const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {
            toggleFavPost('65849effd6fe566e658c5580', '659c4a0d735c5e851dad76cd', error => {
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
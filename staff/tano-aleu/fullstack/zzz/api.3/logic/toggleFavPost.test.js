const mongoose = require('mongoose')

const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {
            toggleFavPost('65abfd4bb4c824321d85d89f', '65a98c679b027b09563c5c59', error => {
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

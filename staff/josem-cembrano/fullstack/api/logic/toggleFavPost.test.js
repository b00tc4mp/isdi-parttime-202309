const mongoose = require('mongoose')

const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleFavPost('65a7bd5bac10d94819cc652e', '65acffdb7e9f6dc641a72c6c', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('has been saved fav 💫')
            })
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
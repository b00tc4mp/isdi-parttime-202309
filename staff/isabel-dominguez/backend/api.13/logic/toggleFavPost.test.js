const mongoose = require('mongoose')
const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleFavPost('659aaf07e1d0a278068d446a', '6599adfe48cde960ef11e560', error => {
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
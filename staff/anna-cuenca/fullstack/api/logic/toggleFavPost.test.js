
const mongoose = require('mongoose')
const toggleFavPost = require('./toggleFavPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {

        try {
            toggleFavPost('65992f24bad309e29f867be1', '659a904a06ac064c6025bc91', error => {
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

const mongoose = require('mongoose')
const changeUserEmail = require('./changeUserEmail')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeUserEmail('658961111bef8b597847ec00', 'lechuga@gmail.com', 'lechuga@gmail.com', '123123123', error => {
                if (error) {
                    console.error(error)

                    return
                }
                console.log('email changed')
            })

        } catch (error) {
            console.error(error)

        }

    })
    .catch(error => console.error(error))

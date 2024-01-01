const mongoose = require('mongoose')

const changeEmailUser = require('./changeEmailUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {

        try {
            changeEmailUser('658b0ef5483938daf11c9c4d', 'patata@frita.com', 'patata@refrita.com', 'patata@refrita.com', error => {

                if (error) {
                    console.error(error)
                    return
                }
                console.log('email changed')

            })


        } catch (error) {
            console.log(error)
        }

    })

    .catch(error => console.error(error))
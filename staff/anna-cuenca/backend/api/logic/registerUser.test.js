const mongoose = require('mongoose')

const registerUser = require('./registerUser') // el requiere es como el input

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {
            registerUser('Le Chuguita', 'lechu@guita.com', '123', error => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log('user registered')
            })

        } catch (error) {
            console.log(error)

        }
    })

    .catch(error => console.error(error))


import mongoose from 'mongoose'

import registerUser from './registerUser.js' // el requiere es como el input

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        try {
            registerUser('Remo Lacha', 'remo@lacha.com', '123', error => {
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
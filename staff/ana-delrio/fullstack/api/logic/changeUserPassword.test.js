import mongoose from 'mongoose'
import changeUserPassword from './changeUserPassword.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            changeUserPassword
                ('658d4dd388f3cf1b1fb4d3af', '123123123', '123123123123', '123123123123', error => {
                    if (error) {
                        console.error(error)

                        return
                    }
                    console.log('password changed')

                })
        } catch (error) {
            console.log(error)

        }

    })
    .catch(error => console.error(error))

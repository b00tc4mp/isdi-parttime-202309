import mongoose from 'mongoose'

import changePasswordUser from './changePasswordUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            changePasswordUser('659b00eb4e62f914182bb69a', '123', '123123123', '123123123', error => {
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

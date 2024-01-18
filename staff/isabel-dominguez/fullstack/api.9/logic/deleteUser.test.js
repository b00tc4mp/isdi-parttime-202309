import mongoose from 'mongoose'
import deleteUser from './deleteUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            deleteUser('6599810a2c6f1a3caa0ed9f3', '234234234', (error, userId) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('user deleted', userId)
            })
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))
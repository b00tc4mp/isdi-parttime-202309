import mongoose from 'mongoose'
import deleteUser from '../logic/deleteUsers.js'

mongoose.connect('mongodb://127.0.0.1/hiinit')
    .then(() => {
        try {
            deleteUser('65d8a618cabfbe51d07de55f', '65e3c59b16e9d4ba324101cf')
                .then(() => console.log('user deleted!'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))
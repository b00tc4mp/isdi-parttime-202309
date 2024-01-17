import mongoose from 'mongoose'
import authenticateUser from './authenticateUser'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            authenticateUser('wendy@darling.com', '123123123', (error, userId) => {
                if (error) {
                    console.error(error)
        
                    return
                }
        
                console.log('user authenticated!', userId)
            })
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))
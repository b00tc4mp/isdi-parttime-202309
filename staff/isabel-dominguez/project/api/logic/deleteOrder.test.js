import mongoose from 'mongoose'
import deleteOrder from './deleteOrder.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        deleteOrder('65fee1c723add433ad568ee3')
            .then(() => {
                console.log('Successfully deleted')
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
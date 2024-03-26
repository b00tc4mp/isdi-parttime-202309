import mongoose from 'mongoose'
import retrieveUserOrder from './retrieveUserOrder.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        retrieveUserOrder('65f57d24ccda00e1896bf9c5')
            .then(order => {
                console.log('Retrieved order:', order)
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
import mongoose from 'mongoose'
import updateCartItemQuantity from './updateCartItemQuantity.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        updateCartItemQuantity('65e865a21df32794307b7e25', '65fefe425fd117aff8dae9c1', 3)
            .then(() => {
                console.log('Updated')
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
import mongoose from 'mongoose'
import updateCartItemQuantity from './updateCartItemQuantity.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        updateCartItemQuantity('65e708dbcdf01598022fe0ad', '65ff115b04c95019b3f02994', -1)
            .then(() => {
                console.log('Updated')
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
import mongoose from 'mongoose'
import addToCart from './addToCart.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        addToCart('65e708dbcdf01598022fe0ad', '65f57d24ccda00e1896bf9c5')
            .then(() => {
                console.log('Successfully added')
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
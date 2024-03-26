import mongoose from 'mongoose'
import addToCart from './addToCart.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        addToCart('65e7071ee2e93c526809e1b3', '65f20f187290aa65d891d07c')
            .then(() => {
                console.log('Successfully added')
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
import mongoose from 'mongoose'

import retrieveProductsByType from './retrieveProductsByType.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {

        retrieveProductsByType('Packings')
            .then(product => {
                console.log('retrieved product', product)
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
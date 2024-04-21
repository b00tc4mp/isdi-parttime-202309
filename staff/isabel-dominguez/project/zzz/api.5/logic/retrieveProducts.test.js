import mongoose from 'mongoose'

import retrieveProducts from './retrieveProducts.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {

        retrieveProducts('')
            .then(product => {
                console.log('retrieved product', product)
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
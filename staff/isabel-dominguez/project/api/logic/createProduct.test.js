import mongoose from 'mongoose'
import createProduct from './createProduct.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        const price = parseFloat('7.50')

        createProduct('Extracto de Bayas de Goji', 'https://www.cremas-caseras.es/6980-medium_default/extracto-de-bayas-de-goji.jpg', price, 'RawMaterial')
            .then(() => {
                console.log('Producto creado exitosamente')
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
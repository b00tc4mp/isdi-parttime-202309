import mongoose from 'mongoose'
import createProduct from './createProduct.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        const price = parseFloat('4.68')

        createProduct('Aceite de Abisinia', '../images/producto1.png', price, 'RawMaterial')
            .then(() => {
                console.log('Producto creado exitosamente')
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
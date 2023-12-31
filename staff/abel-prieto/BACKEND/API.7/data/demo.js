const mongoose = require('mongoose')

const { Schema, model } = mongoose
// Nos traemos 2 parametros propios de mongoose

const user = new Schema({ 
    name: {
        type: String,   // Tipo
        required: true  // Requerido
    },
    email: {
        type: String,
        required: true,
        unique: true    // Unico
    },
    password: {
        type: String,
        required: true
    }
})

mongoose.connect('mongodb://1237.0.0.1:27017/test')
    .then(() => {

    })
    .catch(error => console.error(error))

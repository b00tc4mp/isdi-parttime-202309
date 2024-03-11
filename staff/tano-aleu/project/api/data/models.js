import mongoose from 'mongoose'

const { Schema, model } = mongoose

const user = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true //crea un indice para que no deje registrar a mas usuarios con el mismo email.
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }

})

const sample = new Schema({

    name: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    type: {
        type: String, // Ejemplo: 'drums', 'bass'
    },
    bpm: {
        type: Number,
    },
    duration: {
        type: Number
    }
    //  añadir más campos según si es necesario
});

const User = model('User', user)

const Sample = model('Sample', sample)

export {
    User,
    Sample
}
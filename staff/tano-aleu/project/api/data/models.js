import mongoose from 'mongoose'

const { Schema, model, ObjectId } = mongoose

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
    },

    favSamples: [{
        type: ObjectId,
        ref: 'Sample'
    }]

})

const metronomo = new Schema({

    name: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    type: {
        type: String, // Ejemplo: 'metronomo'
    },
    bpm: {
        type: Number,
    },
    duration: {
        type: Number
    }
    //  añadir más campos según si es necesario
}, { collection: 'metronomes' });


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
}, { collection: 'samples' });

const User = model('User', user)

const Metronomo = model('Metronomo', metronomo)

const Sample = model('Sample', sample)



export {
    User,
    Sample,
    Metronomo
}
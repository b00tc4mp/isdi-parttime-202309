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
        unique: true
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
        type: String,
    },
    bpm: {
        type: Number,
    },
    duration: {
        type: Number
    }

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
        type: String,
    },
    bpm: {
        type: Number,
    },
    duration: {
        type: Number
    }

}, { collection: 'samples' });

const User = model('User', user)

const Metronomo = model('Metronomo', metronomo)

const Sample = model('Sample', sample)



export {
    User,
    Sample,
    Metronomo
}
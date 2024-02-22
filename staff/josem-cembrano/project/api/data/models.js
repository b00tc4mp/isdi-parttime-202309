import mongoose from 'mongoose'

const { Schema, model, ObjectId } = mongoose


const admin = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
})

const dog = new Schema({
    chip: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    birthdate: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    affix: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

const Admin = model('Admin', admin)
const Dog = model('Dog', dog)

export {
    Admin,
    Dog
}
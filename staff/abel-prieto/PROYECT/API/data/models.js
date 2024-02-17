import mongoose from 'mongoose'
const { Schema, model, ObjectId } = mongoose

// INVITADO
const guest = new Schema({
    username: {
        type: String,
        required: true
    },
    group: [
        {
            type: String,
            ref: 'Group',
            default: 'guest'
        }
    ]
})

// USER
const user = new Schema({
    username: {
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
    group: [
        {
            type: String,
            ref: 'Group',
            default: 'localhost'
        }
    ]
})

// ADMIN
const admin = new Schema({
    username: {
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
    group: [
        {
            type: String,
            ref: 'Group',
            default: 'root'
        }
    ]
})

// GROUP
const group = new Schema({
    guest: {
        type: String,
        required: true,
        unique: true,
    },
    localhost: {
        type: String,
        required: true,
        unique: true,
    },
    root: {
        type: String,
        required: true,
        unique: true
    }
})

const Guest = new model('Guest', guest)
const User = new model('User', user)
const Admin = new model('Admin', admin)

const Group = new model('Group', group)

export {
    Guest,
    User,
    Admin,
    Group
}
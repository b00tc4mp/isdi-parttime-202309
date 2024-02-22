import mongoose from 'mongoose'
const { Schema, model } = mongoose

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
            default: ["localhost"]
        }
    ],
    role: [
        {
            type: String,
            enum: ['guest', 'user', 'admin'],
            default: 'user'
        }
    ]
})

// GROUP
const group = new Schema({
    name: {
        type: String,
        default: 'localhost'
    }
})

// COMMAND
const command = new Schema({
    name: {
        type: String,
        unique: true
    }
})

// FILE
const file = new Schema({
    name: {
        type: String,
        unique: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        enum: ["file", "folder"],
        parent: {
            ref: 'File'
        }
    },
    permissions: {
        type: Number,
        enum: [0, 2, 3]
    }
})

// ASSING GROUP & USER TYPE
user.pre('save', function (next) {
    if (!this.group || this.group.length === 0) {
        this.group.push('localhost');
    }

    if (!this.role || this.role.length === 0) {
        this.role.push('user');
    }

    next()
})

const User = new model('User', user)
const Group = new model('Group', group)
const Command = new model('Command', command)
const File = new model('File', file)

export {
    User,
    Group,
    Command,
    File
}
const mongoose = require('mongoose')
const { Schema, model, ObjectId } = mongoose

const guess = new Schema({
    
})

const user = new Schema({

})

const admin = new Schema({

})

const Guess = new model('Guess', guess)
const User = new model('User', user)
const Admin = new model('Admin', admin)

module.exports = {
    Guess,
    User,
    Admin
}
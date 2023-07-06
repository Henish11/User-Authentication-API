const mongoose = require('mongoose')
const validator = require('validator');
const Schema = mongoose.Schema

// Schema
const userSchema = new Schema({
    username : {
        type:String,
        required: [true, 'Enter a username.'],
        unique: [true, 'That username is taken.'],
        minlength:6,
        maxlength:40,
        lowercase: true,
        validate: [validator.isAlphanumeric, 'Usernames may only have letters and numbers.']
    },
    email : {
        type:String,
        require: [true, 'Enter an email address.'],
        unique: [true, 'That email address is taken.'],
        validate: [validator.isEmail, 'Enter a valid email address.']
    },
    password : {
        type :String,
        required: [true, 'Enter a password.'],
        validate: [validator.isStrongPassword, 'Password should be strong']
    }
})

// Model
const Users = mongoose.model('Users',userSchema)

module.exports = Users
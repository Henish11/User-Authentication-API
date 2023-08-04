const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema
const userSchema = new Schema({
    username : {
        type:String,
        required:true,
        unique: true,
    },
    email : {
        type:String,
        require: true,
        unique: true,
    },
    password : {
        type :String,
        required: true,
    }
})


// Model
const Users = mongoose.model('Users',userSchema)

module.exports = Users
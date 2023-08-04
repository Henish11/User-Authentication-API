const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema
const userSchema = new Schema({
    username : {
        type:String,
        required:true,
        unique: true,
        validate: {
            validator: async function(value) {
              const existingUser = await this.constructor.findOne({ username: value });
              return !existingUser;
            },
            message: 'Username must be unique.'
        }
    },
    email : {
        type:String,
        require: true,
        unique: true,
        validate: {
            validator: async function(value) {
              const existingUser = await this.constructor.findOne({ email: value });
              return !existingUser;
            },
            message: 'Email address must be unique.'
        }
    },
    password : {
        type :String,
        required: true,
    }
})


// Model
const Users = mongoose.model('Users',userSchema)

module.exports = Users
const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const Schema = mongoose.Schema

// Schema
const userSchema = new Schema({
    username : {
        type:String,
        require:true,
        minlength:6,
        maxlength:40,
        unique:true,
    },
    email : {
        type:String,
        require:true,
        unique:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return 'Invalid Email Format'
            }
        }
    },
    password : {
        type :String,
        require:true,
        minlength:6,
        maxlength:128
    }
})

// Model
const Users = mongoose.model('Users',userSchema)

module.exports = Users
const Users = require('../models/user')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
const userController = {}

userController.register = (req,res) =>{
    const user = new Users(req.body)
    bcryptjs.genSalt()
            .then((salt)=>{
                bcryptjs.hash(user.password,salt)
                        .then((encrypted)=>{
                            user.password = encrypted
                            user.save()
                                .then((user)=>{
                                     res.json(user)
                                })
                                .catch((err)=>{
                                    res.json(err)
                                })
                        })
            })
}

userController.login = (req,res) =>{
    const body = req.body
    Users.findOne({email:body.email})
        .then((user)=>{
             if(!user){
                res.json({errors: 'invalid email or password'})
             }
            //  byceyptPassword
             bcryptjs.compare(body.password,user.password)
                     .then((match)=>{
                           if(match){
                            // jwt
                             const tokenData = {
                                _id : user.id,
                                email : user.email,
                                username : user.username
                             }
                             const token = jwt.sign(tokenData,'secretkey', {expiresIn:'10h'})
                             res.json({token:`bearer ${token}`})
                           }else{
                             res.json({errors: 'invalid email or password'})
                           }
                     })
        })
}

userController.account = (req,res)=>{
    res.json(req.user)
}

userController.getusers = (req,res)=>{
            Users.find({})
                  .then((data)=>{
                      res.json(data)
                  }).catch((err)=>{
                      res.json(err)
            })
}

module.exports = userController
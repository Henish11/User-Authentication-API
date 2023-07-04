const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/userController')
const {authenticateUser} = require('../app/middlewares/authentication')


router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/account', authenticateUser, userController.account)
router.get('/users', userController.getusers)



module.exports = router
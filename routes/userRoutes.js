const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
router.get('/',userController.signupPage)
router.post('/signup',userController.createUser)
module.exports=router
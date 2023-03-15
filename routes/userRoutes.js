const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
router.get('/',userController.signupPage)
router.post('/signup',userController.createUser)
router.get('/loginPage',userController.loginPage)
router.post('/login',userController.checkUser)
module.exports=router
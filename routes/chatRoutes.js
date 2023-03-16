const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chatController')
router.get('/home',chatController.homePage)

module.exports=router
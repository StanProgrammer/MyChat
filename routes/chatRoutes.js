const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chatController')
const auth = require('../middleware/authorization')
router.get('/home',chatController.homePage)
router.post('/send',auth.authorization,chatController.sendChat)
router.get('/allChats',auth.authorization,chatController.allChats)

module.exports=router
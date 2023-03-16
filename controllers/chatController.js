const path = require('path')
const rootDir = path.dirname(require.main.filename);
const sequelize = require('../util/database');
const Chat = require('../models/chats')
const jwt = require('jsonwebtoken')
const {Op} = require('sequelize');
const env=require('dotenv')
env.config()
const SECRET_KEY=process.env.SECRET_KEY
exports.homePage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'html', 'chat.html'))
}

exports.sendChat=async(req,res,next)=>{
    const sequelizeTransaction = await sequelize.transaction(); 
    try {
        const token = req.header('Authorization');
        const user = jwt.verify(token, SECRET_KEY);
        const id=user.id
        const data=await Chat.create({
            chat: req.body.chat,
            userId: id
        },

        {transaction: sequelizeTransaction})
        await sequelizeTransaction.commit();
        res.status(201).json({message:'Done'})
        
    } catch (error) {
        await sequelizeTransaction.rollback();
        res.status(500).json({error:error})
    }
}

exports.allChats=async(req,res,send)=>{
    try {
        const token = req.header('Authorization');
        const user = jwt.verify(token, SECRET_KEY);
        const id=user.id
        const data=await Chat.findAll({
            limit: 10,
            raw: true,
            where: {
              userId: id
            },
            attributes: ['chat'], 
            order: [ [ 'createdAt', 'DESC' ]]
          });
        res.status(201).json(data)
    } catch (error) {
        console.log(error);
    }
}


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors=require('cors')
const path = require('path')
const User = require('./models/users')
const env=require('dotenv')
env.config()
app.use(cors({
  origin: "http://127.0.0.1:5500"
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
app.use(userRoutes)
app.use(chatRoutes)


app.use(express.static(path.join(__dirname, 'public')))
User.sync()
.then(
app.listen(process.env.PORT,()=>{
  console.log('no error');
}))
.catch(err=>console.log(err))


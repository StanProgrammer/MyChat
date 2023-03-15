const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes')
const path = require('path')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(userRoutes)
app.use('/user',userRoutes)
const User = require('./models/users')
app.use(express.static(path.join(__dirname, 'public')))
User.sync()
.then(
app.listen('3000',()=>{
  console.log('no error');
}))
.catch(err=>console.log(err))


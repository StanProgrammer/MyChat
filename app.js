const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors=require('cors')
const path = require('path')
const User = require('./models/users')
app.use(
  cors({
    origin:'http://localhost:3000',
  })
)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const userRoutes = require('./routes/userRoutes')
app.use(userRoutes)

app.use(express.static(path.join(__dirname, 'public')))
User.sync()
.then(
app.listen('3000',()=>{
  console.log('no error');
}))
.catch(err=>console.log(err))


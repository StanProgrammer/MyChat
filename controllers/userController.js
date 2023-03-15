const path = require('path')
const rootDir = path.dirname(require.main.filename);
const bcrypt = require('bcrypt')

const User = require('../models/users')
exports.signupPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'html', 'signup.html'))
}

exports.loginPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'html', 'login.html'))
}

exports.createUser = async (req, res, next) => {
    try{
        const name = req.body.name
        const email = req.body.email
        const phone = req.body.phone
        const password = req.body.password
        const project = await User.findOne({ where: { email: email } });
        if (project === null) {
            const saltrounds = 10
            const hashPassword = await bcrypt.hash(password, saltrounds)
            const result = await User.create({ name: name, email: email, phone: phone, password: hashPassword })
            // const token = jwt.sign({ email: result.email, id: result.id }, SECRET_KEY)
            res.status(201).json({ message: 'Successfully Created'})
            res.redirect('/')
        } else {
            res.status(400).send('User Already Exists')
    }
}catch(err){
        console.log(err);
    }
}

exports.checkUser=async(req,res,next)=>{
    try {
        console.log(req.body);
        
    } catch (error) {
        
    }
}
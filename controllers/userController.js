const path = require('path')
const rootDir = path.dirname(require.main.filename);

exports.signupPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'html', 'signup.html'))
}
const User = require('../models/users')
exports.createUser = async (req, res, next) => {
    try{
        const name = req.body.name
        const email = req.body.email
        const phone = req.body.phone
        const password = req.body.password
    await User.create({
        name: name,
        email: email,
        phone:phone,
        password: password
    })
    res.redirect('/')
    }catch(err){
        console.log(err);
    }
}

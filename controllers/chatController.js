const path = require('path')
const rootDir = path.dirname(require.main.filename);

exports.homePage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'html', 'chat.html'))
}
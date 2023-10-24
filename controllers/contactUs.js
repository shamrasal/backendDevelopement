const path = require('path');
const rootDir = require('../Util/path')

exports.getContactUsPage = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
}

exports.postContactUsPage = (req, res) => {
    console.log('second')
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}
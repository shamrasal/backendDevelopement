const path = require('path');

const express = require('express');

const rootDir = require('../Util/path')

const router = express.Router()

router.get('/contact-us', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
})

router.post('/success', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
})


module.exports = router 
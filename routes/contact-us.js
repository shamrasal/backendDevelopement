const path = require('path');

const express = require('express');
const rootDir = require('../Util/path')
const contactUsController = require('../controllers/contactUs')

const router = express.Router()

router.get('/contact-us', contactUsController.getContactUsPage)

router.post('/success', contactUsController.postContactUsPage)

module.exports = router 
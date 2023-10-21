const express = require('express');

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('<body>Hello from express</body>')
})

module.exports = router
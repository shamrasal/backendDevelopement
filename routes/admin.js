const express = require('express');

const router = express.Router()
router.get('/add-product', (req, res, next) => {
    res.send(`
        <form action="/product" method="post">
            <lable>Book Name</lable>
            <input type="text" name="title">
            <lable>Book price</lable>
            <input type="text" name="price">
            <button type="submit">Submit</button>
        </form>`
    )
})

router.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router

const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/add-product', (req, res, next) => {
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

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use((req, res, next) => {
    console.log('in another middleware')
    res.send('<body>Hello from express</body>')
})

app.listen(3000);


const express = require('express');

const app = express()

app.use('/', (req, res, next) => {
    console.log('thi8s always runs')
    next()
})

app.use('/add-product', (req, res, next) => {
    res.send('<body>add product</body>')
})

app.use((req, res, next) => {
    console.log('in another middleware')
    res.send('<body>Hello from express</body>')
})

app.listen(3000);


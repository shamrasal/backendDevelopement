const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contact-us');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(shopRoutes)
app.use(contactUsRoutes)


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404eror.html'))
})

app.listen(3000);


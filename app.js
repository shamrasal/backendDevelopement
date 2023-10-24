const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminDataRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contact-us');
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminDataRoutes);
app.use(shopRoutes);
app.use(contactUsRoutes);

app.listen(3000);

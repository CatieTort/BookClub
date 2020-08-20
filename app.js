const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config();
const db = require('./utils/database');
const app = express();

app.set('view engine', 'ejs')

const adminController = require('./controllers/admin')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'styles')));

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(adminController.noRouteFound)

app.listen(3000);
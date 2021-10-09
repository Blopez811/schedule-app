const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
const nodemailer = require('nodemailer');


// stylesheet public folder

const path = require('path');
const exphbs = require('express-handlebars');
require("dotenv").config();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}
// nodemailer transporter //
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: admin gmail account
        pass: process.env.PASSWORD || '1234' // TODO: admin gmail password
    }
});

//Added to access the public folder - ML
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));



// routes
app.use(routes);
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine','handlebars');



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

  module.exports = app;
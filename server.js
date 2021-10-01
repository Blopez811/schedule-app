const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();

// stylesheet public folder

const path = require('path');
// const exphbs = require('express-handlebars');
require("dotenv").config();

//Added to access the public folder - ML
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// routes
app.use(routes);
// app.engine('handlebars', hbs.engine);
// app.set('view engine','handlebars');



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

  module.exports = app;
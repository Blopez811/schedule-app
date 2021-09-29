const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const db = require("./models");
const PORT = 80 || 3001;
const app = express();
// const exphbs = require('express-handlebars');
require("dotenv").config();



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

// const syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//     syncOptions.force = true;
// }






// app.get('/', function (req, res) {
//     res.send('Home Page')
//     console.log(`User is admin = ${req.admin}`)
// })

// app.get('/users', function (req, res) {
//     res.send('Department Page')
// })

// function auth(req, res, next) {
//  if (req.query.admin === 'true') {
//     req.admin = true 
//     next()
// } else {
//     res.send("not an admin")
// }
// }

const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

// const routes = require('./routes');
const sequelize = require("./config/connection");

const hbs = exphbs.create({});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Added to access the public folder - ML
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// routes
// app.use(routes);
app.use(require("./controller/"));

// stylesheet public folder
require("dotenv").config();
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

module.exports = app;

const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
      const sequelize = new Sequelize('scheduler_db', 'root', 'Blopez@811', {
          host: 'localhost',
          dialect: 'mysql',
          port: 3306
      });
  }


module.exports = sequelize;

// process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,
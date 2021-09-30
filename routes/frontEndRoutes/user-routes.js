const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Department, User, Calendar } = require('../../models');

router.get('/', (req, res) => {
    //here the logic to res.render the login page would go
    res.json("hello world")  
});




module.exports = router;
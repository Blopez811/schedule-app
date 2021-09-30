const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Department, User, Calendar } = require('../../models');

router.get('/login', (req, res) => {
    res.render("hello world")
})




module.exports = router;
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Department, User, Calendar } = require('../../models');

router.get('/', (req, res) => {
    //here the logic to res.render the login page would go
    res.json("This route will render the login page") 
});

router.get('/calendar', (req, res) => {
    res.json('This route will render the calendar page')
})




module.exports = router;
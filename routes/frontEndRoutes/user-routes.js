const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Department, User, Calendar } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    //here the logic to res.render the login page would go
    // res.json("This route will render the login page") 
    res.render('login')
});



router.post('/', (req, res) => {
    // expects a username and a password
    User.findOne({
        where: {
          username: req.body.username  
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'That username was not found!' });
        return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
        }

        req.session.save(() => {
            // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            // add admin true or false check in response
            res.json({ user: dbUserData, message: 'You are now logged in!' });
         })
    })
})




module.exports = router;
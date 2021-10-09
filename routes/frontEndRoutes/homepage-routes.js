const router = require('express').Router();
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    //here the logic to res.render the login page would go
    // res.json("This route will render the login page") 
    res.redirect('/login')
});

router.get('/calendar', withAuth, (req, res) => {
    res.render('calendarpage')
});

router.get('/shiftchangeform', (req, res) => {
    res.render('shiftchangeform')
})

module.exports = router;
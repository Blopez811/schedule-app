const router = require('express').Router();
const { Calendar }  = require('../../models')

router.get('/', (req, res) => {
    Calendar.findAll({
        attributes: [
            'id',
            'event name',
            'date',
            'notes'
        ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
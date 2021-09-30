const router = require('express').Router();
const { Calendar }  = require('../../models')

router.get('/', (req, res) => {
    Calendar.findAll({
        attributes: [
            'id',
            'title',
            'date',
            'notes'
        ]
    })
        .then(dbCalendarData => res.json(dbCalendarData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Calendar.create({
        title: req.body.title,
        date: req.body.date,
        notes: req.body.notes
    })
    .then(dbCalendarData => {
        res.json(dbCalendarData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;
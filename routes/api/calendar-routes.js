const router = require('express').Router();
const { Calendar }  = require('../../models')

router.get('/', (req, res) => {
    Calendar.findAll({
        attributes: [
            'id',
            'title',
            'date',
            'notes',
            'department_id'
        ]
    })
        .then(dbCalendarData => res.json(dbCalendarData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Calendar.create({...req.body})
    .then(dbCalendarData => {
        res.json(dbCalendarData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
    Calendar.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCalendarData => {
        if (!dbCalendarData) {
            res.status(404).json({ message: 'No calendar event found with this id' });
            return;
        }
        res.json(dbCalendarData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
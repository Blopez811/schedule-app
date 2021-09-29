const router = require('express').Router();
const { Department } = require('../../models');

router.get('/', (req, res) => {
    Department.findAll({
        attributes: ['id', 'title']
    })
        .then(dbDepartmentData => res.json(dbDepartmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Department.create({
        title: req.body.title
    })
    .then(dbDepartmentData => {
        res.json(dbDepartmentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;
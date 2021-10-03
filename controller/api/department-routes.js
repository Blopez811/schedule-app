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

router.delete('/:id', (req, res) => {
    Department.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbDepartmentData => {
            if (!dbDepartmentData) {
                res.status(404).json({ message: 'No department found with this id' });
                return;
            }
            res.json(dbDepartmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.put('/:id', (req, res) => {
    Department.update(
        {
            title: req.body.title
        },
        {
            where: {

                id: req.params.id

            }
        }
    )
        .then(dbDepartmentData => {
            if (!dbDepartmentData) {
                res.status(404).json({ message: 'No department found with this id' });
                return;
            }
            res.json(dbDepartmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})



module.exports = router;
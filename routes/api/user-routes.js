const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: [
            'id',
            'username',
            'email',
            'admin',
            'department_id'
        ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        admin: req.body.admin,
        department_id: req.body.department_id
    })
        .then(dbUserData => {
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.put('/:id', (req, res) => {
    User.update(
        {
            password: req.body.password
        },
        {
            individualHooks: true,
            where: {
                id: req.params.id
            },
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})



module.exports = router;
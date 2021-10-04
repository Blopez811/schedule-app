const router = require('express').Router();
const sequelize = require('../config/connection');
const { Calendar, Department, User} = require('../models');

//This creates the homepage route
router.get('/', (req, res) => {
  console.log("======================");
    Calendar.findAll({
        attributes: [
            'id',
            'title',
            'date',
            'notes',
            'department_id'
            // What should be the return below?
            [sequelize.literal('(SELECT COUNT(*) FROM event WHERE department.id = calendar.department.id '), 'event_count']
        ],
        include: [
          {
            model: Calendar,
            attributes: ['id', 'title', 'notes', 'department_id'],
            include: {
              model: Department,
              attributes: ['title']
            }
          },
        ]
    })
    .then((dbPostData) => {
      //defining the data that is being passed to the render page
      const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(dbPostData[0]);
      res.render('login', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;
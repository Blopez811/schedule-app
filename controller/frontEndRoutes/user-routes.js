const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Department, User, Calendar } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    //here the logic to res.render the login page would go
    // res.json("This route will render the login page") 
    res.render('login')
});

router.get('/', (req, res) => {
  console.log("======================");
  Calendar.findAll({
    attributes: [
      "id",
      "title",
      "date",
      "notes",
      "department_id"[
        // What should be the return below?
        (sequelize.literal(
          "(SELECT COUNT(*) FROM event WHERE department.id = calendar.department.id "
        ),
        "event_count")
      ],
    ],
    include: [
      {
        model: Calendar,
        attributes: ["id", "title", "notes", "department_id"],
        include: {
          model: Department,
          attributes: ["title"],
        },
      },
    ],
  })
    .then((dbPostData) => {
      //defining the data that is being passed to the render page
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log(dbPostData[0]);
      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/calendar", withAuth, (req, res) => {
//   res.render("calendarpage");
// });

router.get('/calendar', (req, res) => {
    res.render('calendarpage')
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
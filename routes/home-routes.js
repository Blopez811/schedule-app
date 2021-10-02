const router = require("express").Router();
router.get("/", (req, res) => {
  //stand-in code for the calendar homepage
  // User/Department join on department ID - Join Deparmtne ID value using primary key and the department ID as the foreign key - then use the department to pull the calendar
  res.render("homepage", {
    id: 1,
    post_url: "https://docs.js.com/standin/",
    title: "Calendar",
    date: new Date(),
    notes: req.body.notes,
    department_id: department_id,
    user: {
      username: "test_user",
    },
  });
});

module.exports = router;

const router = require("express").Router();
const departmentRoutes = require('./api/department-routes');
const userRoutes = require('./api/user-routes');
const calendarRoutes = require('./api/calendar-routes');
//on start this is where the view is loaded from
const frontUserRoutes = require('./frontEndRoutes/user-routes');

//This is the controller for the views
router.use('/api/departments', departmentRoutes);
router.use('/api/users', userRoutes);
router.use('/api/calendar', calendarRoutes);
router.use('/login', frontUserRoutes);
router.use('/', frontUserRoutes);



module.exports = router;
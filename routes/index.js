const router = require("express").Router();
const departmentRoutes = require('./api/department-routes');
const userRoutes = require('./api/user-routes');
const calendarRoutes = require('./api/calendar-routes');
const frontUserRoutes = require('./frontEndRoutes/user-routes');
const frontPageRoutes = require('./frontEndRoutes/homepage-routes')

router.use('/api/departments', departmentRoutes);
router.use('/api/users', userRoutes);
router.use('/api/calendar', calendarRoutes);
router.use('/login', frontUserRoutes);
router.use('/', frontPageRoutes);



module.exports = router;
const router = require("express").Router();
const departmentRoutes = require('./api/department-routes');
const userRoutes = require('./api/user-routes');
const calendarRoutes = require('./api/calendar-routes');
const frontUserRoutes = require('./frontEndRoutes/user-routes');
const frontPageRoutes = require('./frontEndRoutes/homepage-routes')
const loginRoutes = require('./api/logout-routes');

router.use('/api/departments', departmentRoutes);
router.use('/api/users', userRoutes);
router.use('/api/calendar', calendarRoutes);
router.use('/login', frontUserRoutes);
router.use('/', frontPageRoutes);
router.use('/logout', loginRoutes);



module.exports = router;
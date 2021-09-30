const router = require("express").Router();
const departmentRoutes = require('./api/department-routes');
const userRoutes = require('./api/user-routes');
const calendarRoutes = require('./api/calendar-routes');

router.use('/api/departments', departmentRoutes);
router.use('/api/users', userRoutes);
router.use('/api/calendar', calendarRoutes);



module.exports = router;
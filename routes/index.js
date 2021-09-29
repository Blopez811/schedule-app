const router = require("express").Router();
const departmentRoutes = require('./api/department-routes');
const userRoutes = require('./api/user-routes');

router.use('/api/departments', departmentRoutes);
router.use('/api/users', userRoutes);



module.exports = router;
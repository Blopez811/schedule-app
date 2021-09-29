const router = require("express").Router();
const apiRoutes = require("./api/apiRoutes");
const departmentRoutes = require('./api/department-routes');


router.use('/departments', departmentRoutes);
router.use("/api", apiRoutes);


module.exports = router;
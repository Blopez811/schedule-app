const Router = require("express").Router;
const allRoutes = require("../../models/User");

const apiRoutes = Router();

apiRoutes.use("/User", allRoutes);

module.exports = apiRoutes;
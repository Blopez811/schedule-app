const Router = require("express").Router;
const allRoutes = require("./user");

const apiRoutes = Router();

apiRoutes.use("/User", allRoutes);

module.exports = apiRoutes;
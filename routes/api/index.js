const router = require("express").Router();
const employeeRoutes = require("./employee");

// Book routes
router.use("/employee", employeeRoutes);

module.exports = router;

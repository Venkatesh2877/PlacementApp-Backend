const express = require("express");
const router = express.Router();
const employeeApi = require("../../../controllers/api/v1/employee_Api");

router.post("/signup", employeeApi.signup);
router.get("/signin", employeeApi.signin);

module.exports = router;

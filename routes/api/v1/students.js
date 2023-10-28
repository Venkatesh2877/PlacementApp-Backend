const express = require("express");
const router = express.Router();
const studentApi = require("../../../controllers/api/v1/students_Api");
const passport = require("passport");

router.get(
  "/allstudents",
  passport.authenticate("jwt", { session: false }),
  studentApi.allstudents
);
router.post(
  "/createstudent",
  passport.authenticate("jwt", { session: false }),
  studentApi.createstudent
);

module.exports = router;

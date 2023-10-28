const express = require("express");
const router = express.Router();
const interviewApi = require("../../../controllers/api/v1/interview_Api");
const passport = require("passport");

router.get(
  "/allInterviews",
  passport.authenticate("jwt", { session: false }),
  interviewApi.allinterviews
);
router.post(
  "/createInterview",
  passport.authenticate("jwt", { session: false }),
  interviewApi.createinterviews
);

module.exports = router;

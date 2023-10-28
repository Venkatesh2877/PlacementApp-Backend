const express = require("express");
const router = express.Router();

router.use("/employee", require("./employee"));
router.use("/students", require("./students"));
router.use("/interview", require("./interview"));

module.exports = router;

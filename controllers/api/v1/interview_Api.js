const Interview = require("../../../models/interview");

module.exports.allinterviews = async function (req, res) {
  try {
    let allInterview = await Interview.find({});

    return res.json(200, {
      message: "All Interview",
      data: allInterview,
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: `All Interview error ${err}`,
    });
  }
};

module.exports.createinterviews = async function (req, res) {
  try {
    let exitInterview = await Interview.findOne({
      CompanyName: req.body.CompanyName,
      Date: req.body.Date,
    });

    if (exitInterview) {
      return res.json(500, {
        message: "Interview exits",
      });
    }

    let interview = await Interview.create(req.body);
    return res.json(200, {
      message: "Interview Created",
      data: interview,
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: `Interview  Register error ${err}`,
    });
  }
};

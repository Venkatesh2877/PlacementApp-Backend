const Student = require("../../../models/student");

module.exports.allstudents = async function (req, res) {
  try {
    let students = await Student.find({});

    return res.json(200, {
      message: "Details of all student",
      data: students,
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: `Student Register error ${err}`,
    });
  }
};

module.exports.createstudent = async function (req, res) {
  try {
    let exitStudent = await Student.findOne({
      StudentName: req.body.StudentName,
      Age: req.body.Age,
      CollegeName: req.body.CollegeName,
    });

    if (exitStudent) {
      return res.json(500, {
        message: "Student exits",
      });
    }

    let student = await Student.create(req.body);
    return res.json(200, {
      message: "Student Created",
      data: student,
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: `Student Register error ${err}`,
    });
  }
};
